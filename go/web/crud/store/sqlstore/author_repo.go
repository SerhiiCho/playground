package sqlstore

import (
	"../../entities"
)

// GetAuthors returns the slice of authors
func (store *Store) GetAuthors() ([]entities.Author, error) {
	var authors []entities.Author

	row, err := store.db.Query("select * from authors")

	if err != nil {
		return nil, err
	}

	for row.Next() {
		var a entities.Author

		scanErr := row.Scan(&a.ID, &a.FirstName, &a.LastName)

		if scanErr != nil {
			return nil, scanErr
		}

		authors = append(authors, a)
	}

	return authors, nil
}
