package main

import (
	"fmt"
	"log"
	"net/http"
)

const (
	port = ":8080"
)

func main() {
	http.HandleFunc("/", handleFunc)

	log.Printf("Server has been started on http://localhost%s\n", port)
	err := http.ListenAndServe(port, nil)

	log.Fatal(err)
}

func handleFunc(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "<h1>Hello world</h1>")
}
