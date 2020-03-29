package handlers

import (
	"html/template"
)

const (
	url  = "https://covid-193.p.rapidapi.com/statistics"
	host = "covid-193.p.rapidapi.com"
	key  = "091b42d8ecmsh380ec626aa86af5p14908ajsne8ee54be4633"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("templates/*.html"))
}
