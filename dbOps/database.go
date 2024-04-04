package dbOps

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"hci/dbOps/models"
)

func ConnectDB() (*gorm.DB, error) {
	dsn := "host=localhost user=hci password=seng404 dbname=buhrec port=5432 sslmode=disable"

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	return db, err
}

func MigrateAll(db *gorm.DB) {
	db.AutoMigrate(&models.User{})
	db.AutoMigrate(&models.Admin{})
	db.AutoMigrate(&models.Review{})
	db.AutoMigrate(&models.Comment{})
	db.AutoMigrate(&models.Faculty{})
	db.AutoMigrate(&models.Payment{})
	db.AutoMigrate(&models.Proposal{})
	db.AutoMigrate(&models.Reviewer{})
	db.AutoMigrate(&models.Discipline{})
	db.AutoMigrate(&models.Registration{})
}
