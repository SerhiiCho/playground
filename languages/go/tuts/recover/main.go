package main

import "fmt"

func main() {
	defer Catch()

	panic("Panic is here!!!")
}

// Catch catches the panic
func Catch() {
	if r := recover(); r != nil {
		if _, ok := r.(error); ok {
			fmt.Printf("Recovered from panic. The message is: '%s'\n", r)
		}
	}
}
