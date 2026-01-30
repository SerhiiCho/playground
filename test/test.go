package main

import "fmt"

type Test struct {
	Falsy bool
}

func (t *Test) call() bool {
	return true
}

func main() {
	obj := Test{Falsy: false}
	fmt.Println(!obj.Falsy)
}
