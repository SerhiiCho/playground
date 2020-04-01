package server

import "database/sql"

// newDB configures the database connection
func newDB() (*sql.DB, error) {
	db, dbErr := sql.Open("mysql", mysqlCredentials)

	if dbErr != nil {
		return nil, dbErr
	}

	if pingErr := db.Ping(); pingErr != nil {
		return nil, pingErr
	}

	return db, nil
}
