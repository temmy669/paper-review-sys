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
