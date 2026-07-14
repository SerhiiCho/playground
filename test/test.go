package main

import (
	"log"
	"time"
)

type Tag struct{}

func main() {
	parsed, err := time.Parse("15:04:05", "10:00:09")
	if err != nil {
		log.Fatal(err)
	}

	res := parsed.Format("2006-01-02")

	println(res)
}
