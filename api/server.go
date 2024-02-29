package api

import (
	"github.com/gin-gonic/gin"
)

type Server struct {
	PORT   string
	router *gin.Engine
}

func (s *Server) setUpRouter() {
	r := gin.Default()

	r.GET("/status", healthCheck)

	s.router = r
}

func (s *Server) Start() error {
	err := s.router.Run(s.PORT)

	return err
}

func NewServer(port string) *Server {
	server := &Server{}

	server.PORT = port

	server.setUpRouter()

	return server
}

func healthCheck(c *gin.Context) {
	c.JSON(200, gin.H{
		"status": "100% healthy",
	})
}
