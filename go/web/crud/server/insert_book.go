package server

import (
	"../entities"
	"log"
	"net/http"
)

func (s *server) insertBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		err := s.store.InsertBook(&entities.Book{
			Title: r.FormValue("title"),
			Isbn:  r.FormValue("isbn"),
		})

		if err != nil {
			log.Printf("Inserting a book error. Message: %s", err)
		}

		http.Redirect(w, r, "/", http.StatusSeeOther)
	}
}
