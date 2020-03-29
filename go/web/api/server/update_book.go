package server

import (
	"net/http"
)

func (s *server) updateBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "PUT" {
			http.Redirect(w, r, "/", 301)
		}
	}
}
