package api

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	"hci/token"
)

type Server struct {
	DB         *gorm.DB
	PORT       string
	router     *gin.Engine
	TokenMaker *token.TokenGen
}

func (s *Server) setUpRouter() {
	r := gin.Default()

	r.GET("/status", healthCheck)

	// user mgmt
	r.POST("/users", s.createUser)
	r.POST("/users/login", s.loginUser)

	// reviwer mgmt
	r.POST("/reviewers", s.createReviewer)
	r.POST("/reviewers/login", s.loginReviewer)

	s.router = r
}

func (s *Server) Start() error {
	err := s.router.Run(s.PORT)

	return err
}

func NewServer(port string, db *gorm.DB) *Server {
	tg := &token.TokenGen{}

	server := &Server{
		PORT:       port,
		DB:         db,
		TokenMaker: tg,
	}

	server.setUpRouter()

	return server
}

func healthCheck(c *gin.Context) {
	c.JSON(200, gin.H{
		"status": "100% healthy",
	})
}
