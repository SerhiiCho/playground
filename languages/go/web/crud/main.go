package main

import (
	"log"

	"github.com/SerhiiCho/crud/server"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	if err := server.Start(); err != nil {
		log.Fatalf("Starting server error. Message: %s", err)
	}
}
