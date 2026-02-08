package main

import "fmt"

type User struct {
	Name string
	Age  uint8
}

func main() {
	user1 := &User{}
	var user2 *User

	fmt.Printf("-------> user1 %#v\n", user1)
	fmt.Printf("-------> user2 %#v\n", user2)
	fmt.Println("----------------")

	count1 := 0
	var count2 int

	fmt.Printf("-------> count1 %#v\n", count1)
	fmt.Printf("-------> count2 %#v\n", count2)
	fmt.Println("----------------")
}
