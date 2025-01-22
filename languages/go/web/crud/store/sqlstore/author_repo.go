package sqlstore

import (
	"github.com/SerhiiCho/crud/entities"
)

// GetAuthors returns the slice of authors
func (store *Store) GetAuthors() ([]entities.Author, error) {
	var authors []entities.Author

	row, err := store.db.Query("SELECT * FROM authors")

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
func (store *Store) FindAuthor(id string) (*entities.Author, error) {
	q := `SELECT * FROM authors WHERE id = ?`
	row, err := store.db.Query(q, id)

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

// UpdateAuthor updates author in the database 'authors' table
func (store *Store) UpdateAuthor(author *entities.Author) error {
	query := `UPDATE authors SET first_name = ?, last_name = ? WHERE id = ?`
	_, err := store.db.Query(query, author.FirstName, author.LastName, author.ID)

	if err != nil {
		return err
	}

	return nil
}
