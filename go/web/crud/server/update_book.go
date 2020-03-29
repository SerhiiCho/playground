package server

import (
	"../entities"
	"fmt"
	"log"
	"net/http"
	"strconv"
)

func (s *server) updateBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "POST" || r.URL.Path != "/books/update" {
			http.Redirect(w, r, "/", 301)
		}

		bookId, err := strconv.Atoi(r.FormValue("book"))

		if err != nil {
			log.Fatalf("Error converting book id to int in updateBook method. Message: %s\n", err)
		}

		updateErr := s.store.UpdateBook(&entities.Book{
			ID:    bookId,
			Title: r.FormValue("title"),
			Isbn:  r.FormValue("isbn"),
		})

		if updateErr != nil {
			fmt.Printf("Error updating the book. Message: %s\n", updateErr)
		}

		http.Redirect(w, r, "/", 301)
	}
}
