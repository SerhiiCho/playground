package main

import (
	"fmt"
	. "iterator/app"
)

// Iterate using a callback function
func main() {
	// use IterateBooks to iterate via a callback function
	// Lib.IterateBooks(myBookCallback)

	// Use IterateBooks to iterate via anonymous function
	// Lib.IterateBooks(func(b Book) error {
	// 	fmt.Println("Book author:", b.Author)
	// 	return nil
	// })

	// create a BookIterator
	iter := Lib.CreateIterator()

	for iter.HasNext() {
		book := iter.Next()
		fmt.Printf("%#v\n", book)
	}
}

// This callback function processes an individual Book object
func myBookCallback(b Book) error {
	fmt.Println("Book title:", b.Name)
	return nil
}
