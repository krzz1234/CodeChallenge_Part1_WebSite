package users

import (
	"Users/Mark/go/src/github.com/krzz1234/CodeChallenge_Part1_Website/backend/domain/users"
	"Users/Mark/go/src/github.com/krzz1234/CodeChallenge_Part1_Website/backend/services"
	"Users/Mark/go/src/github.com/krzz1234/CodeChallenge_Part1_Website/backend/utils/errors"

	"github.com/gin-gonic/gin"
)

func Register(c *gin.Context) {
	var user users.User

	if err := c.ShouldBindJSON(&user); err != nil {
		err := errors.NewBadRequestError("invalid json body")
		c.JSON(err.Status, err)
		return
	}

	services.CreatUser(user)
}
