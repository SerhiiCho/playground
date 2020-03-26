package handlers

import (
	"encoding/json"
	"math/rand"
	"net/http"
	"strconv"

	"../entities"
)

// CreateBook creates a book item
func CreateBook(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")

	var book entities.Book
	_ = json.NewDecoder(request.Body).Decode(&book)

	book.ID = strconv.Itoa(rand.Intn(1000000))
	books = append(books, book)

	json.NewEncoder(response).Encode(book)
}
