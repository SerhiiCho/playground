package sqlstore

import (
	"../../entities"
	"fmt"
)

// InsertBook inserts book into a database
func (store *Store) InsertBook(book *entities.Book) error {
	query := `INSERT INTO books (title, isbn, author_id) VALUES ($1, $2, $3);`
	res, err := store.db.Query(query, book.Title, book.Isbn)

	fmt.Printf("%#v\n", res)

	if err != nil {
		return err
	}

	return nil
}
