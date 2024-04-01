package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name         string    `gorm:"not null"`
	DOB          time.Time `gorm:"not null"`
	Email        string    `gorm:"not null;unique"`
	PasswordHash string    `gorm:"not null"`
	Phone        string    `gorm:"not null;unique"`
	DisciplineID uint      `gorm:"not null"`
	SchoolLevel  string    `gorm:"not null"` // enum
}

type Reviewer struct {
	gorm.Model
	Type             string `gorm:"not null"`
	Name             string `gorm:"not null"`
	Email            string `gorm:"not null;unique"`
	PasswordHash     string `gorm:"not null"`
	DisciplineID     uint   `gorm:"not null"`
	SchoolLevel      string `gorm:"not null"` // enum
	YearsOfReviewing uint   `gorm:"default:0"`
	HomeInstitution  string `gorm:"not null"`
	CountryDomiciled string `gorm:"not null"`
}

type Admin struct {
	gorm.Model
	Type         string `gorm:"not null"`
	Name         string `gorm:"not null"`
	Email        string `gorm:"not null;unique"`
	PasswordHash string `gorm:"not null"`
}
