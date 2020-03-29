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

		bookId, Berr := strconv.Atoi(r.FormValue("book"))
		authorId, Aerr := strconv.Atoi(r.FormValue("author"))

		if Berr != nil {
			log.Fatalf("Error converting book id to int in updateBook method. Message: %s\n", Berr)
		}

		if Aerr != nil {
			log.Fatalf("Error converting author id to int in updateBook method. Message: %s\n", Aerr)
		}

		updateErr := s.store.UpdateBook(&entities.Book{
			ID:     bookId,
			Title:  r.FormValue("title"),
			Isbn:   r.FormValue("isbn"),
			Author: &entities.Author{ID: authorId},
		})

		if updateErr != nil {
			fmt.Printf("Error updating the book. Message: %s\n", updateErr)
		}

		http.Redirect(w, r, "/", 301)
	}
}
