package server

import (
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

// editBook handler is responsible for the single book page view
func (s *server) editBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println()
		bookID := mux.Vars(r)["id"]
		book, findErr := s.store.FindBook(bookID)

		if findErr != nil {
			log.Printf("Finding book in databse error. Message: %s", findErr)
		}

		err := tpl.ExecuteTemplate(w, "edit_book.gohtml", book)
		log.Printf("Executing template error. Message: %s", err)
	}
}
