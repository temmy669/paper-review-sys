package api

import (
	"net/http"

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

	user := makeUser(&req, passwordHash)

	if dbResult := s.DB.Create(&user); dbResult.Error != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, err)
		return
	}

	util.JsonResp(ctx, 201, user)
}

func makeUser(user *createUserReq, pHash string) models.User {
	u := models.User{
		PasswordHash: pHash,
		Name:         user.Name,
		DOB:          user.DOB,
		Email:        user.Email,
		Phone:        user.Phone,
		DisciplineID: uint(user.DisciplineID),
		SchoolLevel:  user.SchoolLevel,
	}

	return u
}
