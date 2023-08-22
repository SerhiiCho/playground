package handlers

import (
	"html/template"
)

const (
	url = "https://api.covid19api.com/summary"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("templates/*.html"))
}
