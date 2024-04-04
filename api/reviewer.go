package api

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"

	"hci/dbOps/models"
	"hci/util"
)

type createReviewerReq struct {
	Name             string `json:"full_name"          binding:"required"`
	Email            string `json:"email"              binding:"required,email"`
	Password         string `json:"password"           binding:"required"`
	SchoolLevel      string `json:"school_level"       binding:"required,alpha"`
	Type             string `json:"type"               binding:"required"`
	DisciplineID     int    `json:"discipline_id"      binding:"required,number"`
	YearsOfReviewing uint   `json:"years_of_reviewing" binding:"required,number"`
	HomeInstitution  string `json:"home_institution"   binding:"required"`
	CountryDomiciled string `json:"country_domiciled"  binding:"required"`
}

type createReviewerResp struct {
	Name             string    `json:"full_name"`
	Email            string    `json:"email"`
	DisciplineID     uint      `json:"discipline_id"`
	Type             string    `json:"type"`
	SchoolLevel      string    `json:"school_level"`
	YearsOfReviewing uint      `json:"year_of_reviewing"`
	HomeInstitution  string    `json:"home_institution"`
	CountryDomiciled string    `json:"country_domiciled"`
	CreatedAt        time.Time `json:"-"`
}

func (s *Server) createReviewer(ctx *gin.Context) {
	var req createReviewerReq

	if err := ctx.ShouldBindJSON(&req); err != nil {
		util.ErrResp(ctx, http.StatusBadRequest, err)
		return
	}

	passwordHash, err := util.HashPassword(req.Password)
	if err != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, err)
		return
	}

	reviewer := makeDBReviewer(&req, passwordHash)

	if dbResult := s.DB.Create(&reviewer); dbResult.Error != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, dbResult.Error)
		return
	}

	revResp := makeReviewerResp(&reviewer)

	util.JsonResp(ctx, http.StatusCreated, revResp)
}

type loginReviewerReq struct {
	Email    string `json:"email"    binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

type loginReviewerResp struct {
	AccessToken string             `json:"token"`
	User        createReviewerResp `json:"user"`
}

func (s *Server) loginReviewer(ctx *gin.Context) {
	var req loginReviewerReq

	if err := ctx.ShouldBindJSON(&req); err != nil {
		util.ErrResp(ctx, http.StatusBadRequest, err)
		return
	}

	var reviewer models.Reviewer

	if dbResult := s.DB.First(&reviewer); dbResult.Error != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, dbResult.Error)
		return
	}

	err := util.ComparePassword(req.Password, reviewer.PasswordHash)
	if err != nil {
		util.ErrResp(ctx, http.StatusBadRequest, err)
		return
	}

	accessToken, err := s.TokenMaker.CreateToken(req.Email, "R", time.Duration(2*3600*time.Second))
	if err != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, err)
		return
	}

	resp := loginReviewerResp{
		AccessToken: accessToken,
		User:        *makeReviewerResp(&reviewer),
	}

	util.JsonResp(ctx, http.StatusOK, resp)
}
