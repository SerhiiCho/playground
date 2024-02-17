package sqlstore

import (
	"fmt"

	"github.com/SerhiiCho/crud/entities"
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

// GetBooks returns the slice of books
func (store *Store) GetBooks() ([]entities.Book, error) {
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

		scanErr := row.Scan(&b.ID, &b.Isbn, &b.Title, &a.ID, &a.FirstName, &a.LastName)

		if scanErr != nil {
			return nil, scanErr
		}

		b.Author = &a

		books = append(books, b)
	}

	return books, nil
}

// DeleteBook removes given book id from database
func (store *Store) DeleteBook(bookID string) error {
	_, err := store.db.Exec("DELETE FROM books WHERE id = ?", bookID)

	if err != nil {
		return err
	}

	return nil
}

// UpdateBook removes given book id from database
func (store *Store) UpdateBook(book *entities.Book) error {
	query := "UPDATE books SET isbn = ?, title = ?, author_id = ? WHERE id = ?"
	_, err := store.db.Query(query, book.Isbn, book.Title, book.Author.ID, book.ID)

	if err != nil {
		return err
	}

	return nil
}

// FindBook returns the book with provided id
func (store *Store) FindBook(bookID string) (*entities.Book, error) {
	q := `
		SELECT b.id, b.isbn, b.title, a.id, a.first_name, a.last_name
			FROM books b
			LEFT JOIN authors a ON b.author_id = a.id
		WHERE b.id = ?
	`
	row, err := store.db.Query(q, bookID)

	if err != nil {
		return nil, err
	}

	var b entities.Book
	var a entities.Author

	for row.Next() {
		scanErr := row.Scan(&b.ID, &b.Isbn, &b.Title, &a.ID, &a.FirstName, &a.LastName)

		if scanErr != nil {
			return nil, scanErr
		}
	}

	b.Author = &a

	return &b, nil
}
