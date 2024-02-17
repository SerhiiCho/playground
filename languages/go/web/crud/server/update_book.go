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
			http.Redirect(w, r, "/", 301)
		}

		bookID, Berr := strconv.Atoi(r.FormValue("book"))
		authourID, Aerr := strconv.Atoi(r.FormValue("author"))

		if Berr != nil {
			log.Fatalf("Error converting book id to int in updateBook method. Message: %s\n", Berr)
		}

		if Aerr != nil {
			log.Fatalf("Error converting author id to int in updateBook method. Message: %s\n", Aerr)
		}

		updateErr := s.store.UpdateBook(&entities.Book{
			ID:     bookID,
			Title:  r.FormValue("title"),
			Isbn:   r.FormValue("isbn"),
			Author: &entities.Author{ID: authourID},
		})

		if updateErr != nil {
			fmt.Println("Error updating the book.", updateErr)
		}

		http.Redirect(w, r, "/", 301)
	}
}
