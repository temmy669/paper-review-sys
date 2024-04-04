package api

import (
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"

	"hci/dbOps/models"
	"hci/token"
	"hci/util"
)

func (s *Server) newProp(ctx *gin.Context) {
	var user models.User

	authPayload := ctx.MustGet(authorizationPayloadKey).(*token.Payload)

	dbResult := s.DB.Where("email = ?", authPayload.Email).First(&user)
	if dbResult.Error != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, dbResult.Error)
		return
	}

	fname := strconv.Itoa(int(user.ID)) + "_review" + uuid.New().String()

	file, _, err := ctx.Request.FormFile("file")
	if err != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, err)
		return
	}
	defer file.Close()

	dst, err := os.Create(filepath.Join("files", fname))
	if err != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, err)
		return
	}
	defer dst.Close()

	if _, err = io.Copy(dst, file); err != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, err)
		return
	}

	prop := models.Proposal{
		UserID: user.ID,
		File:   "files" + fname,
	}

	if dbResult := s.DB.Create(&prop); dbResult.Error != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, dbResult.Error)
		return
	}

	util.JsonResp(ctx, http.StatusCreated, prop)
}

func (s *Server) allProps(ctx *gin.Context) {
	var props []models.Proposal
	var user models.User

	authPayload := ctx.MustGet(authorizationPayloadKey).(*token.Payload)

	dbResult := s.DB.Where("email = ?", authPayload.Email).First(&user)
	if dbResult.Error != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, dbResult.Error)
		return
	}

	dbResult = s.DB.Where("user_id = ?", user.ID).Find(&props)
	if dbResult.Error != nil {
		util.ErrResp(ctx, http.StatusInternalServerError, dbResult.Error)
		return
	}

	util.JsonResp(ctx, http.StatusOK, props)
}
