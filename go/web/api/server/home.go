package server

import (
	"log"
	"net/http"

	"../entities"
)

// home handler is responsible for the home page view
func (s *server) home() http.HandlerFunc {
	author := &entities.Author{ID: 1, FirstName: "Ketrin", LastName: "Rowling"}

	books := []entities.Book{
		{ID: 1, Isbn: "2332", Title: "Harry Potter", Author: author},
	}

	return func(w http.ResponseWriter, r *http.Request) {
		err := tpl.ExecuteTemplate(w, "home.gohtml", books)
		log.Printf("Executing template error. Message: %s", err)
	}
}
