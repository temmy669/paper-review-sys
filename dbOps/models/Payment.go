package models

import (
	"gorm.io/gorm"
)

type Payment struct {
	gorm.Model
	UserID         uint    `gorm:"not null"`
	ProposalID     uint    `gorm:"not null;unique"`
	Amount         float64 `gorm:"not null"`
	Status         string  `gorm:"not null;default:Pending"`
	TrackingNumber uint    `gorm:"autoIncrement"`
}
