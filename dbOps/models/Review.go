package models

import (
	"gorm.io/gorm"
)

type Review struct {
	gorm.Model
	ProposalID  uint   `gorm:"unique;not null"`
	Conditional string `gorm:"type:text"`
}
