package server

import (
	"log"
	"net/http"

	"../entities"
)

// insertBook creates a book record in database
// and redirects to a home page
func (s *server) insertBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		err := s.store.InsertBook(&entities.Book{
			Title: r.FormValue("title"),
			Isbn:  r.FormValue("isbn"),
		})

		if err != nil {
			log.Println("Inserting a book error.", err)
		}

		http.Redirect(w, r, "/", http.StatusSeeOther)
	}
}
