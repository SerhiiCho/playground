package server

import (
	"log"
	"net/http"
)

func (s *server) createBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		authors, authorsErr := s.store.GetAuthors()

		if authorsErr != nil {
			log.Println("Getting authors query error.", authorsErr)
		}

		err := tpl.Response(w, "books/create_book", map[string]interface{}{
			"authors": authors,
		})

		if err != nil {
			log.Println("Executing template error.", err)
		}
	}
}
