package api

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Server struct {
	DB     *gorm.DB
	PORT   string
	router *gin.Engine
}

func (s *Server) setUpRouter() {
	r := gin.Default()

	r.GET("/status", healthCheck)

	// user mgmt
	r.POST("/users", s.createUser)

	s.router = r
}

func (s *Server) Start() error {
	err := s.router.Run(s.PORT)

	return err
}

func NewServer(port string, db *gorm.DB) *Server {
	server := &Server{
		PORT: port,
		DB:   db,
	}

	server.setUpRouter()

	return server
}

func healthCheck(c *gin.Context) {
	c.JSON(200, gin.H{
		"status": "100% healthy",
	})
}
