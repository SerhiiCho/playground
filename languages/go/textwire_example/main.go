package main

import (
	"fmt"

	. "github.com/textwire/textwire"
)

func main() {
	res, err := ParseText("<h2>{{ title }}</h2>", map[string]interface{}{
		"title": "Hello World",
	})

	if err != nil {
		panic(err)
	}

	fmt.Println(res)
}
