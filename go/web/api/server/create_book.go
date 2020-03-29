package server

import (
	"log"
	"net/http"
)

func (s *server) createBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		err := tpl.ExecuteTemplate(w, "create_book.gohtml", nil)
		log.Printf("Executing template error. Message: %s", err)
	}
}
