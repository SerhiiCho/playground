package sqlstore

import (
	"database/sql"
)

// Store struct
type Store struct {
	db *sql.DB
}

// New returns pointer on Store
func New(db *sql.DB) *Store {
	return &Store{db}
}
