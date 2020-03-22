package main

import (
	"log"
	"net/http"

	"github.com/SerhiiCho/go-playground/web/corona_virus/handlers"
)

func main() {
	http.HandleFunc("/", handlers.Home)
	err := http.ListenAndServe(":8080", nil)

	log.Fatal("Listen and serve error:", err)
}
