package app

import "Users/Mark/go/src/github.com/krzz1234/CodeChallenge_Part1_Website/backend/controller/users"

func mapUrls() {
	router.POST("/api/register", users.Register)
}
