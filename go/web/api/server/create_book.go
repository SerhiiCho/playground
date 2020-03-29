package server

import (
	"log"
	"net/http"
)

func (s *server) createBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		err := tpl.ExecuteTemplate(w, "create_book.gohtml", map[string]interface{}{
			"Page": "create_book",
		})
		log.Printf("Executing template error. Message: %s", err)
	}
}
