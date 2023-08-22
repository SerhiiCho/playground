package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", homePage)
	fmt.Println("Server is started on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

type Article struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Content     string `json:"content"`
}

func homePage(w http.ResponseWriter, r *http.Request) {
	articles := []Article{
		{
			Title:       "How to make your life nicer",
			Description: "This is a small description",
			Content:     "Content is here",
		},
	}

	w.Header().Add("Content-Type", "application/json")
	json.NewEncoder(w).Encode(articles)
}
