package main

import (
	"fmt"
	"log"

	"github.com/SerhiiCho/timeago/v3"
)

func init() {
	timeago.Configure(timeago.Config{
		Language: "en",
		Location: "Europe/Kiev",
	})
}

func main() {
	out, err := timeago.Parse("2024-02-27 10:00:00")

	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println(out)
}
