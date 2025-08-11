package main

import "fmt"

func main() {
	nums := make(chan int)
	out := make(chan int)

	go fill(nums)
	go multiply(nums, out)

	for n := range out {
		fmt.Println(n)
	}
}

func fill(nums chan<- int) {
	for i := 0; i < 10000000; i++ {
		nums <- i
	}

	close(nums)
}

func multiply(nums <-chan int, out chan<- int) {
	for num := range nums {
		out <- num * 2
	}

	close(out)
}
