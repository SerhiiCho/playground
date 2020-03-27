package server

import (
	"net/http"
)

func (s *server) deleteBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		//w.Header().Set("Content-Type", "application/json")
		//
		//bookID := mux.Vars(r)["id"]
		//newBooks := getBooksWithoutOne(bookID)
		//
		//json.NewEncoder(w).Encode(newBooks)
	}
}
