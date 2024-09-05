package main

import (
	"fmt"
	"net/http"

	"github.com/textwire/textwire"
)

var tpl *textwire.Template

func main() {
	var err error

	tpl, err = textwire.NewTemplate(&textwire.Config{
		TemplateDir: "templates",
	})

	if err != nil {
		fmt.Println(err)
	}

	http.HandleFunc("/", homeView)
	fmt.Println("Listening on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}

func homeView(w http.ResponseWriter, r *http.Request) {
	vars := map[string]interface{}{
		"books": []struct{ Title, Author string }{
			{"The Great Gatsby", "F. Scott Fitzgerald"},
			{"To Kill a Mockingbird", "Harper Lee"},
			{"1984", "George Orwell"},
			{"Pride and Prejudice", "Jane Austen"},
			{"The Catcher in the Rye", "J.D. Salinger"},
		},
	}

	err := tpl.Response(w, "home", vars)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
