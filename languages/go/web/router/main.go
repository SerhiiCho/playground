package main

import (
	"log"
	"net/http"

	"./handlers"
)

const (
	port = ":8010"
)

func main() {
	setRoutes()
	serveApp()
}

func serveApp() {
	log.Printf("Server has been started on http://localhost%s\n", port)
	err := http.ListenAndServe(port, nil)

	log.Fatal(err)
}

func setRoutes() {
	http.HandleFunc("/", handlers.Home)
	http.HandleFunc("/about", handlers.About)
}
