package main

import (
	"fmt"

	ago "github.com/SerhiiCho/timeago/v3"
)

func init() {
	ago.Configure(ago.Config{
		Language: ago.LangRu,
	})
}

func main() {
	out, _ := ago.Parse("2024-11-27 12:43:00")
	fmt.Println(out)
}
