package models

import (
	"gorm.io/gorm"
)

type Withdrawal struct {
	gorm.Model
	ProposalID uint `gorm:"not null"`
	ReviewerID uint `gorm:"not null"`
}
