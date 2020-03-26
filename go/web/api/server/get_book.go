package server

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

// getBook item from database
func (serv *server) getBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		bookID := mux.Vars(r)["id"]
		singleBook := getSingleBook(bookID)

		json.NewEncoder(w).Encode(singleBook)
	}
}
