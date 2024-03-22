package server

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/SerhiiCho/crud/entities"
)

func (s *server) updateBook() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "POST" || r.URL.Path != "/books/update" {
			http.Redirect(w, r, "/", http.StatusMovedPermanently)
		}

		bookID, bErr := strconv.Atoi(r.FormValue("book"))
		authorID, aErr := strconv.Atoi(r.FormValue("author"))

		if bErr != nil {
			log.Fatalf("Error converting book id to int in updateBook method. Message: %s\n", bErr)
		}

		if aErr != nil {
			log.Fatalf("Error converting author id to int in updateBook method. Message: %s\n", aErr)
		}

		updateErr := s.store.UpdateBook(&entities.Book{
			ID:     bookID,
			Title:  r.FormValue("title"),
			Isbn:   r.FormValue("isbn"),
			Author: &entities.Author{ID: authorID},
		})

		if updateErr != nil {
			fmt.Println("Error updating the book.", updateErr)
		}

		http.Redirect(w, r, "/", http.StatusMovedPermanently)
	}
}
