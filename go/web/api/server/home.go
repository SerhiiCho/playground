package server

import (
	"log"
	"net/http"
)

// home handler is responsible for the home page view
func (s *server) home() http.HandlerFunc {
	books, err := s.store.ShowBooks()

	if err != nil {
		log.Fatalf("Can't query books. Message: %s\n", err)
	}

	return func(w http.ResponseWriter, r *http.Request) {
		err := tpl.ExecuteTemplate(w, "home.gohtml", books)
		log.Printf("Executing template error. Message: %s", err)
	}
}
