package main

import (
	"fmt"
	"net/http"

	"github.com/textwire/textwire"
)

func main() {
	http.HandleFunc("/", home)
	fmt.Println("Listening on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}

func home(w http.ResponseWriter, r *http.Request) {
	vars := map[string]interface{}{
		"title": "Hello, World!",
		"age":   23,
	}

	// res, err := textwire.ParseFile("templates/home", vars)
	res, err := textwire.ParseText("<h1>{{ title }} and {{ age }}</h1>", vars)

	if err != nil {
		panic(err)
	}

	fmt.Fprintf(w, res)
}
