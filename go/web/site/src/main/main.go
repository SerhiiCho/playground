package main

import (
	"github.com/SerhiiCho/timeago"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
)

// MyHandler struct
type MyHandler struct{}

func (handler *MyHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path[1:]

	log.Println(path)
	data, err := ioutil.ReadFile(string(path))

	if err != nil {
		w.WriteHeader(404)
		_, _ = w.Write([]byte(timeago.Take("2019-10-24 20:54:30|online")))
		return
	}

	var contentType string

	if strings.HasSuffix(path, ".css") {
		contentType = "text/css"
	} else if strings.HasSuffix(path, ".html") {
		contentType = "text/html"
	} else if strings.HasSuffix(path, ".png") {
		contentType = "image/png"
	} else if strings.HasSuffix(path, ".js") {
		contentType = "application/javascript"
	} else if strings.HasSuffix(path, ".svg") {
		contentType = "image/svg+xml"
	} else {
		contentType = "text/plain"
	}

	w.Header().Add("Content-Type", contentType)
	w.Write(data)
}

func main() {
	http.Handle("/", new(MyHandler))
	http.ListenAndServe(":8001", nil)
}
