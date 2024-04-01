package models

import (
	"gorm.io/gorm"
)

type Faculty struct {
	gorm.Model
	Name string `gorm:"not null"`
}

type Discipline struct {
	gorm.Model
	Name      string `gorm:"not null"`
	FacultyID uint   `gorm:"not null"`
}
