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

		err := tpl.ExecuteTemplate(w, "create_book.html", authors)
		log.Printf("Executing template error. Message: %s", err)
	}
}
