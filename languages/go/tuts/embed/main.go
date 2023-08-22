package main

import "fmt"

type Animal struct {
	Sound string
}

func (a *Animal) MakeSound() string {
	return a.Sound
}

type Cat struct {
	Animal
}

func main() {
	cat := Cat{Animal{Sound: "myauu myauu"}}
	fmt.Printf("%#v\n", cat.MakeSound())
}
