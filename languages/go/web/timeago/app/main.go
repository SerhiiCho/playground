package main

import (
	"fmt"

	ago "codeberg.org/timeago/timeago/v3"
)

func init() {
	ago.Configure(ago.Config{
		Language: ago.LangRu,
	})
}

func main() {
	out, err := ago.Parse("2024-11-27 12:43:00")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println(out)
}
