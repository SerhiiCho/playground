package server

import (
	"log"
	"net/http"
	"strconv"

	"github.com/SerhiiCho/crud/entities"
)

// updateAuthor handler is responsible for updating author in the database
func (s *server) updateAuthor() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "POST" || r.URL.Path != "/authors/update" {
			http.Redirect(w, r, "/", http.StatusMovedPermanently)
		}

		authorID, err := strconv.Atoi(r.FormValue("author"))

		if err != nil {
			log.Fatalf("Error converting author id to int in updateAuthor method. Message: %s\n", err)
		}

		err = s.store.UpdateAuthor(&entities.Author{
			ID:        authorID,
			FirstName: r.FormValue("first"),
			LastName:  r.FormValue("last"),
		})

		if err != nil {
			log.Println("Error updating the author.", err)
		}

		http.Redirect(w, r, "/", http.StatusMovedPermanently)
	}
}
