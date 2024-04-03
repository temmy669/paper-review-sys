package api

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"

	"hci/dbOps/models"
	"hci/util"
)

type createUserReq struct {
	Name         string `json:"full_name"     binding:"required"`
	DOB          string `json:"dob"           binding:"required,datetime=2006-01-02"`
	Email        string `json:"email"         binding:"required,email"`
	Password     string `json:"password"      binding:"required"`
	Phone        string `json:"phone"         binding:"required,e164"`
	DisciplineID int    `json:"discipline_id" binding:"required,number"`
	SchoolLevel  string `json:"school_level"  binding:"required,alpha"`
}

type createUserResp struct {
	Name         string    `json:"full_name"`
	DOB          string    `json:"dob"`
	Email        string    `json:"email"`
	Phone        string    `json:"phone"`
	DisciplineID uint      `json:"discipline_id"`
	SchoolLevel  string    `json:"school_level"`
	CreatedAt    time.Time `json:"-"`
}

func (s *Server) createUser(ctx *gin.Context) {
	var req createUserReq

	if err := ctx.ShouldBindJSON(&req); err != nil {
		util.ErrResp(ctx, http.StatusBadRequest, err)
		return
	}

	passwordHash, err := util.HashPassword(req.Password)
	if err != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, err)
		return
	}

	user := makeDBUser(&req, passwordHash)

	if dbResult := s.DB.Create(&user); dbResult.Error != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, dbResult.Error)
		return
	}

	userResp := makeUserResp(&user)

	util.JsonResp(ctx, http.StatusCreated, userResp)
}

type loginUserReq struct {
	Email    string `json:"email"    binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

type loginUserResp struct {
	AccessToken string         `json:"token"`
	User        createUserResp `json:"user"`
}

func (s *Server) loginUser(ctx *gin.Context) {
	var req loginUserReq

	if err := ctx.ShouldBindJSON(&req); err != nil {
		util.ErrResp(ctx, http.StatusBadRequest, err)
		return
	}

	var user models.User

	if dbResult := s.DB.First(&user); dbResult.Error != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, dbResult.Error)
		return
	}

	err := util.ComparePassword(req.Password, user.PasswordHash)
	if err != nil {
		util.ErrResp(ctx, http.StatusBadRequest, err)
		return
	}

	accessToken, err := s.TokenMaker.CreateToken(req.Email, time.Duration(2*3600*time.Second))
	if err != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, err)
		return
	}

	resp := loginUserResp{
		AccessToken: accessToken,
		User:        *makeUserResp(&user),
	}

	util.JsonResp(ctx, http.StatusOK, resp)
}
