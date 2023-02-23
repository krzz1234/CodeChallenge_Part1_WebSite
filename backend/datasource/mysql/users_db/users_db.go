package users_db

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

var (
	Client *sql.DB
)

func init() {

}
