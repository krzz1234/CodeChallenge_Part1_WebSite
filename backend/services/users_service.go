package services

import (
	"Users/Mark/go/src/github.com/krzz1234/CodeChallenge_Part1_Website/backend/domain/users"
	"Users/Mark/go/src/github.com/krzz1234/CodeChallenge_Part1_Website/backend/utils/errors"

	"golang.org/x/crypto/bcrypt"
)

func CreatUser(user users.User) (*users.User, *errors.RestErr) {
	if err := user.Validate(); err != nil {
		return nil, err
	}

	pwSlice, err := bcrypt.GenerateFromPassword([]byte(user.Password), 14)
	if err != nil {
		return nil, errors.NewBadRequestError(("failed to encrypt the password"))
	}

	user.Password = string(pwSlice[:])

	user.Save()
}
