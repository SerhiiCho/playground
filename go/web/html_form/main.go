package main

import (
	"html/template"
	"log"
	"net/http"
	"strconv"
)

var tpl *template.Template

const letterCounterStart = 0

func init() {
	tpl = template.Must(template.ParseGlob("templates/*.gohtml"))
}

func main() {
	http.HandleFunc("/", index)
	http.HandleFunc("/process", process)
	err := http.ListenAndServe(":8001", nil)

	log.Fatal("Listen and serve error:", err)
}

func index(w http.ResponseWriter, r *http.Request) {
	tpl.ExecuteTemplate(w, "index.gohtml", nil)
}

func process(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Redirect(w, r, "/", http.StatusSeeOther)
		return
	}

	var data struct {
		Text template.HTML
	}

	result := ""
	i := letterCounterStart
	text := r.FormValue("text")

	for _, letter := range text {
		if strconv.Itoa(i) == r.FormValue("wrap") {
			result += "<br>"
			i = letterCounterStart
		}

		result += string(letter)
		i++
	}

	data.Text = template.HTML(result)

	tpl.ExecuteTemplate(w, "process.gohtml", data)
}
