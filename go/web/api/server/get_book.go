package server

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

// getBook item from the database
func (s *server) getBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		bookID := mux.Vars(r)["id"]
		singleBook := getSingleBook(bookID)

		if err := json.NewEncoder(w).Encode(singleBook); err != nil {
			log.Fatal(err)
		}
	}
}
