package store

import "github.com/SerhiiCho/crud/entities"

// Store is the common interface for all stores
type Store interface {
	// books
	InsertBook(*entities.Book) error
	GetBooks() ([]entities.Book, error)
	DeleteBook(string) error
	UpdateBook(*entities.Book) error
	FindBook(string) (*entities.Book, error)
	// authors
	GetAuthors() ([]entities.Author, error)
}
