package models

import (
	"gorm.io/gorm"
)

type Registration struct {
	gorm.Model
	Type   string `gorm:"not null"`
	UserID uint   `gorm:"not null"`
	Status string `gorm:"not null;default:Pending"`
}
