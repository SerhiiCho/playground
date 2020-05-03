package main

import (
	"fmt"

	arrays "../arrays"
)

/*
GetHello returns greeting for a man or woman
depending what argument you will pass
*/
func GetHello(isMan bool) string {
	if isMan {
		return "Hello man"
	}
	return "Hello girl"
}

/*
IsPretty returns the same boolean value that
you will pass as an argument
*/
func IsPretty(state bool) bool {
	return state
}

func PrintType() {
	println(GetHello(true))
	fmt.Printf("%T\n", 29)
}

func PrintColors() {
	for _, color := range arrays.GetColors() {
		println("The color is " + color)
	}
}

func PrintEmails() {
	emails := arrays.GetEmails()

	for name, email := range emails {
		println("Name is " + name + " and email is " + email)
	}
}

// Person model
type Person struct {
	name   string
	age    uint
	gender string
}

func (p *Person) getName() string {
	return p.name
}

func main() {
	PrintType()
	PrintColors()
	PrintEmails()

	admin := Person{
		name:   "Serhii",
		age:    29,
		gender: "m",
	}

	println(admin.getName())
}
