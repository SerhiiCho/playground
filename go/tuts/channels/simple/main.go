package main

import "fmt"

func multiply(ch chan int, num int) {
	ch <- num * 5
}

func main() {
	ch := make(chan int)

	go multiply(ch, 5)
	go multiply(ch, 3)

	fmt.Println(<-ch)
	fmt.Println(<-ch)
}
