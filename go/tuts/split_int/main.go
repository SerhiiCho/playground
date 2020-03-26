package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	fmt.Printf("Splitted integer: %v\n", splitInt(1233))
}

// Converts integer to slice of integers int -> []int
func splitInt(num int) []int {
	chars := strings.Split(strconv.Itoa(num), "")
	var numbs []int

	for _, char := range chars {
		num, _ := strconv.Atoi(char)
		numbs = append(numbs, num)
	}

	return numbs
}
