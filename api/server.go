package api

type Server struct {
	PORT string
}

func NewServer(port string) *Server {
	server := &Server{}

	server.PORT = port

	return server
}
