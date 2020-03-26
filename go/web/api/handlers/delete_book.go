package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

// DeleteBook deletes the book item
func DeleteBook(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")

	bookID := mux.Vars(request)["id"]
	newBooks := getBooksWithoutOne(bookID)

	json.NewEncoder(response).Encode(newBooks)
}
