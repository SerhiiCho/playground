package main

import "fmt"

func main() {
	defer func() {
		if r := recover(); r != nil {
			fmt.Printf("Recovered from panic. The message is: '%v'\n", r)
		}
	}()

	panic("Noo it's a panic here!!!")
}
