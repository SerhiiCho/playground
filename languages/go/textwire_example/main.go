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
		"title": "Hello, World!",
		"age":   23,
	}

	err := tpl.Response(w, "home", vars)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
