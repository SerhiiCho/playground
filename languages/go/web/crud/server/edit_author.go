package server

import (
	"log"
	"net/http"
)

// editAuthor handler is responsible for the single author page view
func (s *server) editAuthor() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		authorID := r.PathValue("id")
		author, findErr := s.store.FindAuthor(authorID)

		if findErr != nil {
			log.Println("Finding author in database error. Message:", findErr)
		}

		err := tpl.Response(w, "authors/edit_author", map[string]interface{}{
			"author": author,
		})

		if err != nil {
			log.Println("Executing template error.", err)
		}
	}
}
