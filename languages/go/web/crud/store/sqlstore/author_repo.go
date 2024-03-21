package sqlstore

import (
	"github.com/SerhiiCho/crud/entities"
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

// FindAuthor returns the author with provided id
func (store *Store) FindAuthor(authorID string) (*entities.Author, error) {
	q := `SELECT * FROM authors WHERE id = ?`
	row, err := store.db.Query(q, authorID)

	if err != nil {
		return nil, err
	}

	var a entities.Author

	for row.Next() {
		scanErr := row.Scan(&a.ID, &a.FirstName, &a.LastName)

		if scanErr != nil {
			return nil, scanErr
		}
	}

	return &a, nil
}
