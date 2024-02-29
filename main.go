package main

import (
	"hci/api"
)

const configFile = "./config.json"

var conf Config

func main() {
	err := readConfig(configFile, &conf)
	if err != nil {
		panic(err)
	}

	server := api.NewServer(conf.PORT)

	err = server.Start()
	if err != nil {
		panic(err)
	}
}
