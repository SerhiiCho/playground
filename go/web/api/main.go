package main

import (
	"log"

	"./server"
)

func main() {
	if err := server.Start(); err != nil {
		log.Fatalf("Starting server error. Message: %s", err)
	}
}
