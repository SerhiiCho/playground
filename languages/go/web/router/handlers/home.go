package handlers

import (
	"net/http"
	"strings"
)

// Home page handler
func Home(w http.ResponseWriter, r *http.Request) {
	title := "This is the home page"

	jsonResponse(w, Response{
		Title: title,
		Page:  strings.Title(r.URL.Path[1:]),
		URL:   r.URL.Path,
	})
}
