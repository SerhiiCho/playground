package handlers

import (
	"encoding/json"
	"net/http"
)

// GetBooks from database
func GetBooks(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	json.NewEncoder(response).Encode(books)
}
