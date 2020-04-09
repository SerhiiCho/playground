package main

import "fmt"

type Animal interface {
	MakeSound() string
}

type Cat struct{}

func (cat Cat) MakeSound() string {
	return "myauu myauu"
}

type Dog struct{}

func (dog Dog) MakeSound() string {
	return "wyaff wyaff"
}

func main() {
	cat := Cat{}
	dog := Dog{}

	fmt.Println(getSoundFromAnimal(cat))
	fmt.Println(getSoundFromAnimal(dog))
}

func getSoundFromAnimal(animal Animal) string {
	return animal.MakeSound()
}
