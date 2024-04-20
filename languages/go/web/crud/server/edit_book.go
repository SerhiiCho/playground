package server

import (
	"log"
	"net/http"
)

// editBook handler is responsible for the single book page view
func (s *server) editBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		bookID := r.PathValue("id")
		book, findErr := s.store.FindBook(bookID)
		authors, authorsErr := s.store.GetAuthors()

		if authorsErr != nil {
			log.Println("Getting authors query error. Message:", authorsErr)
		}

		if findErr != nil {
			log.Println("Finding book in database error. Message:", findErr)
		}

		err := tpl.Response(w, "books/edit_book", map[string]interface{}{
			"book":    book,
			"authors": authors,
		})

		if err != nil {
			log.Println("Executing template error.", err)
		}
	}
}
