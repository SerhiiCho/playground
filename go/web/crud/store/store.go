package store

import "../entities"

// Store interface
type Store interface {
	InsertBook(*entities.Book) error
	ShowBooks() ([]entities.Book, error)
	DeleteBook(string) error
	UpdateBook(*entities.Book) error
	FindBook(string) (*entities.Book, error)
	GetAuthors() ([]entities.Author, error)
}
