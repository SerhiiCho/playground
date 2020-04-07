package server

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

// editBook handler is responsible for the single book page view
func (s *server) editBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println()
		bookID := mux.Vars(r)["id"]
		book, findErr := s.store.FindBook(bookID)
		authors, authorsErr := s.store.GetAuthors()

		if authorsErr != nil {
			log.Printf("Getting authors query error. Message: %s\n", authorsErr)
		}

		if findErr != nil {
			log.Printf("Finding book in databse error. Message: %s\n", findErr)
		}

		err := tpl.ExecuteTemplate(w, "edit_book.html", map[string]interface{}{
			"book":    book,
			"authors": authors,
		})

		log.Println("Executing template error.", err)
	}
}
