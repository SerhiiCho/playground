package server

import (
	"log"
	"net/http"
)

// home handler is responsible for the home page view
func (s *server) home() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		books, err := s.store.ShowBooks()

		if err != nil {
			log.Fatalf("Can't query books. Message: %s\n", err)
		}

		errTpl := tpl.ExecuteTemplate(w, "home.html", books)
		log.Printf("Executing template error. Message: %s", errTpl)
	}
}
