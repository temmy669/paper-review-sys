package api

import "hci/dbOps/models"

func makeDBUser(user *createUserReq, pHash string) models.User {
	u := models.User{
		PasswordHash: pHash,
		Name:         user.Name,
		DOB:          user.DOB,
		Email:        user.Email,
		Phone:        user.Phone,
		DisciplineID: uint(user.DisciplineID),
		SchoolLevel:  user.SchoolLevel,
	}

	return u
}

func makeUserResp(dbUser *models.User) *createUserResp {
	return &createUserResp{
		Name:         dbUser.Name,
		DOB:          dbUser.DOB,
		Email:        dbUser.Email,
		Phone:        dbUser.Phone,
		DisciplineID: dbUser.DisciplineID,
		SchoolLevel:  dbUser.SchoolLevel,
		CreatedAt:    dbUser.CreatedAt,
	}
}

func makeDBReviewer(rev *createReviewerReq, pHash string) models.Reviewer {
	return models.Reviewer{
		PasswordHash:     pHash,
		Type:             rev.Type,
		Name:             rev.Name,
		Email:            rev.Email,
		DisciplineID:     uint(rev.DisciplineID),
		SchoolLevel:      rev.SchoolLevel,
		YearsOfReviewing: rev.YearsOfReviewing,
		HomeInstitution:  rev.HomeInstitution,
		CountryDomiciled: rev.CountryDomiciled,
	}
}

func makeReviewerResp(dbRev *models.Reviewer) *createReviewerResp {
	return &createReviewerResp{
		Name:             dbRev.Name,
		Email:            dbRev.Email,
		DisciplineID:     dbRev.DisciplineID,
		Type:             dbRev.Type,
		SchoolLevel:      dbRev.SchoolLevel,
		YearsOfReviewing: dbRev.YearsOfReviewing,
		HomeInstitution:  dbRev.HomeInstitution,
		CountryDomiciled: dbRev.CountryDomiciled,
		CreatedAt:        dbRev.CreatedAt,
	}
}
