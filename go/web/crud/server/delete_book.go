package server

import (
	"log"
	"net/http"
)

func (s *server) deleteBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "POST" || r.URL.Path != "/books/delete" {
			http.Redirect(w, r, "/", 301)
		}

		err := s.store.DeleteBook(r.FormValue("book"))

		if err != nil {
			log.Fatalf("Deleting book error. Message: %s", err)
		}

		http.Redirect(w, r, "/", 301)
	}
}
