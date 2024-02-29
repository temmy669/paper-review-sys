package main

import (
	"encoding/json"
	"os"
)

// Config represents the information needed to connect to a postgresql db
type Config struct {
	PORT string `json:"port"`
	// Debug serves as the mode the application is running in
	Debug    bool `json:"debug"`
	Database db   `json:"db"`
}

func (c Config) String() string {
	b, err := json.Marshal(c)
	if err != nil {
		panic(err)
	}

	return string(b)
}

// db contains the information about the db and the schema
type db struct {
	ConnInfo string `json:"connInfo"`
}

func readConfig(configFile string, conf *Config) error {
	file, err := os.Open(configFile)
	if err != nil {
		return err
	}

	if err = json.NewDecoder(file).Decode(conf); err != nil {
		return err
	}

	return nil
}
