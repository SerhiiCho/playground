package server

import (
	"net/http"
)

func (s *server) deleteBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
	}
}
