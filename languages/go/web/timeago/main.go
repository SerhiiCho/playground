package main

import (
	"fmt"

	"github.com/SerhiiCho/timeago/v2"
)

func init() {
	timeago.SetConfig(timeago.Config{
		Language: "en",
		Location: "Europe/Kiev",
	})
}

func main() {
	res := timeago.Parse("2024-02-27 10:00:00")

	fmt.Println(res)
}
