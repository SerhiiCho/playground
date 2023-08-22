package main

import "fmt"

// This number can be any number to find factorial of
// Don't use big int because Go can handle big integer
const numberToFindFactorialOf = 10

func main() {
	res := bigInteger(numberToFindFactorialOf)
	fmt.Println(res)
}

func bigInteger(n int) int {
	r := 1

	for i := 2; i <= n; i++ {
		r *= i
	}
	return r
}
