package models

import (
	"gorm.io/gorm"
)

type Comment struct {
	gorm.Model
	ProposalID uint   `gorm:"not null"`
	Body       string `gorm:"type:text"`
}
