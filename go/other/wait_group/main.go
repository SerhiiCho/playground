package main

import (
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func main() {
	wg.Add(8)

	go calc(10, 40)
	go calc(2341, 4235)
	go calc(25234, 3242342)
	go calc(2642, 23420)
	go calc(10, 40)
	go calc(2341, 4235)
	go calc(25234, 3242342)
	go calc(2642, 23420)

	wg.Wait()
}

func calc(one, two int) {
	time.Sleep(time.Second * 1)
	fmt.Println(one + two)
	wg.Done()
}
