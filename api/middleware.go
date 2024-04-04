package api

import (
	"errors"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"

	"hci/token"
	"hci/util"
)

const (
	authorizationHeaderKey  = "authorization"
	authorizationPayloadKey = "authPayload"
	authorizationTypeBearer = "bearer"
)

func authMiddleware(tg token.TokenGen) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		authorizationHeader := ctx.GetHeader(authorizationHeaderKey)
		if len(authorizationHeader) == 0 {
			err := errors.New("authorization header is not provided")
			util.ErrResp(ctx, http.StatusUnauthorized, err)
			return
		}

		fields := strings.Fields(authorizationHeader)
		if len(fields) < 2 {
			err := errors.New("'invalid authorization header format")
			util.ErrResp(ctx, http.StatusUnauthorized, err)
			return
		}

		accessToken := fields[1]

		payload, err := tg.VerifyToken(accessToken)
		if err != nil {
			util.ErrResp(ctx, http.StatusUnauthorized, err)
			return
		}

		ctx.Set(authorizationPayloadKey, payload)
		ctx.Next()
	}
}
