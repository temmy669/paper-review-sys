package models

import (
	"gorm.io/gorm"
)

// type Proposal struct {
// 	gorm.Model
// 	UserID               uint `gorm:"not null"`
// 	ReviewerID           uint
// 	DisciplineID         uint   `gorm:"not null"`
// 	Title                string `gorm:"not null"`
// 	Introduction         string `gorm:"type:text;not null"`
// 	Background           string `gorm:"type:text;not null"`
// 	Scope                string `gorm:"type:text;not null"`
// 	Justification        string `gorm:"type:text;not null"`
// 	Objectives           string `gorm:"type:text;not null"`
// 	Hypothesis           string `gorm:"type:text"`
// 	LiteratureReview     string `gorm:"type:text;not null"`
// 	MaterialsMethods     string `gorm:"type:text;not null"`
// 	EthicalConsent       string `gorm:"type:text"`
// 	ReviewStatus         string `gorm:"not null;default:Pending"`
// 	StatementOrProcedure string `gorm:"type:text"`
// }

type Proposal struct {
	gorm.Model
	UserID     uint   `gorm:"not null"`
	File       string `gorm:"not null,unique"`
	ReviewerID uint
	// DisciplineID uint   `gorm:"not null"`
	ReviewStatus string `gorm:"not null;default:Pending"`
}
