package server

import "../entities"

var books []entities.Book

func getSingleBook(bookID string) entities.Book {
	for _, item := range books {
		if item.ID == bookID {
			return item
		}
	}

	return entities.Book{}
}

func getBooksWithoutOne(bookID string) []entities.Book {
	for i, item := range books {
		if item.ID == bookID {
			books = append(books[:i], books[i+1:]...)
			break
		}
	}
	return books
}
