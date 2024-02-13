package main

import (
	"fmt"
	"net/http"

	"github.com/textwire/textwire"
	"github.com/textwire/textwire/fail"
)

var tpl *textwire.Template

func main() {
	var err *fail.Error

	tpl, err = textwire.NewTemplate(&textwire.Config{
		TemplateDir: "templates",
	})

	err.FatalOnError()

	http.HandleFunc("/", homeView)
	fmt.Println("Listening on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}

func homeView(w http.ResponseWriter, r *http.Request) {
	vars := map[string]interface{}{
		"title": "Hello, World!",
		"age":   23,
	}

	tpl.Response(w, "home", vars).PanicOnError()
}
