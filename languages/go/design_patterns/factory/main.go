package main

import (
	. "factory/app"
	"fmt"
)

// Newspapers and magazines example

func main() {
	mag1, _ := NewPublication("magazine", "Time", 50, "The Times")
	mag2, _ := NewPublication("magazine", "Life", 40, "Life Inc")
	news1, _ := NewPublication("newspaper", "The New York Times", 60, "The New York Times Company")
	news2, _ := NewPublication("newspaper", "The Washington Post", 70, "Nash Holdings LLC")

	pubDetails(mag1)
	pubDetails(mag2)
	pubDetails(news1)
	pubDetails(news2)
}

func pubDetails(pub IPublication) {
	fmt.Printf("----------------\n")
	fmt.Printf("%s\n", pub)
	fmt.Printf("Type: %T\n", pub)
	fmt.Printf("Name: %s\n", pub.GetName())
	fmt.Printf("Pages: %d\n", pub.GetPages())
	fmt.Printf("Publisher: %s\n", pub.GetPublisher())
	fmt.Printf("----------------\n")
}
