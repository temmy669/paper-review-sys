package main

import (
	"hci/api"
	"hci/dbOps"
)

const configFile = "./config.json"

var conf Config

func init() {
	database, err := dbOps.ConnectDB()
	if err != nil {
		panic(err)
	}

	dbOps.MigrateAll(database)
}

func main() {
	err := readConfig(configFile, &conf)
	if err != nil {
		panic(err)
	}

	db, err := dbOps.ConnectDB()
	if err != nil {
		panic(err)
	}

	server := api.NewServer(conf.PORT, db)

	err = server.Start()
	if err != nil {
		panic(err)
	}
}
