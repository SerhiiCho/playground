package sqlstore

import (
	"fmt"

	"../../entities"
)

// InsertBook inserts book into a database
func (store *Store) InsertBook(book *entities.Book) error {
	query := `INSERT INTO books (title, isbn, author_id) VALUES (?, ?, ?)`
	res, err := store.db.Exec(query, book.Title, book.Isbn, 1)

	fmt.Printf("%#v\n", res)

	if err != nil {
		return err
	}

	return nil
}

// ShowBooks returns the slice of books
func (store *Store) ShowBooks() ([]entities.Book, error) {
	var books []entities.Book

	q := `
		select b.id, b.isbn, b.title, a.id, a.first_name, a.last_name
			from books b left join authors a on b.author_id = a.id
	`
	row, err := store.db.Query(q)

	if err != nil {
		return nil, err
	}

	for row.Next() {
		var b entities.Book
		var a entities.Author

		row.Scan(&b.ID, &b.Isbn, &b.Title, &a.ID, &a.FirstName, &a.LastName)

		b.Author = &a

		books = append(books, b)
	}

	return books, nil
}
