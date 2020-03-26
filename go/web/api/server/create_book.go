package server

import (
	"encoding/json"
	"math/rand"
	"net/http"

	"../entities"
)

func (s *server) createBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		var book entities.Book
		_ = json.NewDecoder(r.Body).Decode(&book)

		book.ID = rand.Intn(1000000)
		books = append(books, book)

		json.NewEncoder(w).Encode(book)
	}
}
