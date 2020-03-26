package sqlstore

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

// Store struct
type Store struct {
	db *sql.DB
}

// New returns pointer on Store
func New(db *sql.DB) *Store {
	return &Store{db: db}
}
