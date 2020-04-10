package main

import "fmt"

func worker(ch chan<- int) {
	ch <- 1
}

func main() {
	ch1 := make(chan int)
	ch2 := make(chan int)

	go worker(ch1)
	go worker(ch2)

	for i := 0; i < 2; i++ {
		select {
		case val1 := <-ch1:
			fmt.Println(val1)
		case val2 := <-ch2:
			fmt.Println(val2)
		}
	}
}
