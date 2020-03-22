package handlers

import (
	"net/http"
	"strings"
)

// About page handler
func About(w http.ResponseWriter, r *http.Request) {
	title := "This is about me page"

	jsonResponse(w, Response{
		Title: title,
		Page:  strings.Title(r.URL.Path[1:]),
		URL:   r.URL.Path,
	})
}
