package main

import (
	"fmt"
	"strings"
)

func main() {
	list := []string{"hello", "nice", "prank"}

	upper := Map(list, func(item string) string {
		return strings.ToUpper(item)
	})

	hellos := Filter(upper, func(item string) bool {
		return item == "HELLO"
	})

	fmt.Printf("%#v\n", hellos)
}

// Map ...
func Map(inp []string, call func(string) string) []string {
	var new []string

	for _, item := range inp {
		new = append(new, call(item))
	}

	return new
}

// Filter ...
func Filter(inp []string, call func(string) bool) []string {
	var new []string

	for _, item := range inp {
		if call(item) {
			new = append(new, item)
		}
	}

	return new
}
