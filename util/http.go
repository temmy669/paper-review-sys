package util

import (
	"log"

	"github.com/gin-gonic/gin"
)

func JsonResp(c *gin.Context, code int, body any) {
	c.JSON(code, gin.H{
		"data":    body,
		"success": true,
		"err":     nil,
	})
}

func ErrResp(c *gin.Context, code int, err error) {
	log.Println(err)
	c.JSON(code, gin.H{
		"data":    nil,
		"success": false,
		"err":     err.Error(),
	})
}
