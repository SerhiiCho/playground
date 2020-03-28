package server

import (
	"log"
	"net/http"

	"../entities"
)

// editBook handler is responsible for the single book page view
func (s *server) editBook() http.HandlerFunc {
	author := &entities.Author{ID: 1, FirstName: "Ketrin", LastName: "Rowling"}
	book := entities.Book{ID: 1, Isbn: "2332", Title: "Harry Potter", Author: author}

	return func(w http.ResponseWriter, r *http.Request) {
		err := tpl.ExecuteTemplate(w, "edit_book.gohtml", book)
		log.Printf("Executing template error. Message: %s", err)
	}
}
