package server

import (
	"log"
	"net/http"
)

func (s *server) createBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		authors, authorsErr := s.store.GetAuthors()

		if authorsErr != nil {
			log.Printf("Getting authors query error. Message: %s\n", authorsErr)
		}

		err := tpl.ExecuteTemplate(w, "create_book.gohtml", authors)
		log.Printf("Executing template error. Message: %s", err)
	}
}
