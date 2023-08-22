package main

import (
	"fmt"
	"log"
	"net/http"

	"./handlers"
)

const port = ":8080"

func main() {
	http.HandleFunc("/", handlers.Home)

	fmt.Println("Listening on http://localhost" + port)
	err := http.ListenAndServe(port, nil)

	log.Fatalln("Listen and serve error:", err)
}
