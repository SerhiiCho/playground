package server

import (
	"net/http"

	"../entities"
)

func (s *server) home() http.HandlerFunc {
	author := &entities.Author{1, "Ketrin", "Rowling"}

	books := []entities.Book{
		entities.Book{1, "2332", "Harry Potter", author},
	}

	return func(w http.ResponseWriter, r *http.Request) {
		tpl.ExecuteTemplate(w, "home.gohtml", map[string]interface{}{
			"Books": books,
		})
	}
}
