package main

import (
	"fmt"
	"net/http"

	"github.com/textwire/textwire/v2"
	"github.com/textwire/textwire/v2/config"
)

var tpl *textwire.Template

func main() {
	var err error

	tpl, err = textwire.NewTemplate(&config.Config{
		TemplateDir: "templates",
	})

	if err != nil {
		fmt.Println(err)
	}

	http.HandleFunc("/", homeView)
	http.HandleFunc("/about", aboutView)

	fmt.Println("Listening on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}

func homeView(w http.ResponseWriter, r *http.Request) {
	vars := map[string]interface{}{
		"books": []struct{ Title, Author, Image string }{
			{"The Great Gatsby", "F. Scott Fitzgerald", "https://placehold.co/400"},
			{"To Kill a Mockingbird", "Harper Lee", "https://placehold.co/400"},
			{"1984", "George Orwell", "https://placehold.co/400"},
			{"Pride and Prejudice", "Jane Austen", "https://placehold.co/400"},
			{"The Catcher in the Rye", "J.D. Salinger", "https://placehold.co/400"},
		},
	}

	err := tpl.Response(w, "home", vars)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func aboutView(w http.ResponseWriter, r *http.Request) {
	err := tpl.Response(w, "about", nil)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
