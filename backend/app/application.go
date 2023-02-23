package app

import "github.com/gin-gonic/gin"

var (
	router = gin.Default()
)

func SatrtApplication() {
	mapUrls()
	router.Run(":8081")
}
