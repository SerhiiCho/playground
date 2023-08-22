package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// Response object
type Response struct {
	Title string `json:"title"`
	Page  string `json:"page"`
	URL   string `json:"url"`
}

func jsonResponse(w http.ResponseWriter, resp Response) {
	json, err := json.Marshal(resp)

	if err != nil {
		panic(err)
	}

	w.Header().Set("Content-Type", "application/json")

	fmt.Fprint(w, string(json))
}
