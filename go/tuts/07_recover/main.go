package main

import "fmt"

func main() {
	defer catch()

	panic("Panic is here!!!")
}

func catch() {
	if r := recover(); r != nil {
		fmt.Printf("Recovered from panic. The message is: '%s'\n", r)
	}
}
