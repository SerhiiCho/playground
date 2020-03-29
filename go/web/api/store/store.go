package store

import "../entities"

// Store interface
type Store interface {
	InsertBook(book *entities.Book) error
	ShowBooks() ([]entities.Book, error)
}
