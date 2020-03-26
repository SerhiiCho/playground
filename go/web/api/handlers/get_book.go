package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

// GetBook item from database
func GetBook(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")

	bookID := mux.Vars(request)["id"]
	singleBook := getSingleBook(bookID)

	json.NewEncoder(response).Encode(singleBook)
}
