package main

import (
	"fmt"
	"log"
	"net/http"

	"./handlers"
)

func main() {
	http.HandleFunc("/", handlers.Home)

	fmt.Println("Listening on http://localhost:8080")
	err := http.ListenAndServe(":8080", nil)

	log.Fatal("Listen and serve error:", err)
}
