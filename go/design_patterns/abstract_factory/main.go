package main

import (
	"abstractfactory/factory"
	"errors"
	"fmt"
)

// AnimalFactoryInterface is contract for all animal factories
// like cat, dog or any other animal
type AnimalFactoryInterface interface {
	MakeSound() string
	GetDescription() string
}

// GetFactory returns the factory with provided type name
func GetFactory(factoryType string) (AnimalFactoryInterface, error) {
	switch factoryType {
	case "cat":
		return factory.CatFactory{}, nil
	case "dog":
		return factory.DogFactory{}, nil
	default:
		return nil, errors.New("The type of the factory is unknown")
	}
}

func main() {
	// The string `dog` or `cat` can go from a config file.
	// In this example I just use a string for simplicity.
	animal, _ := GetFactory("dog")

	// Now when we use animal anywhere in the code, we can be more
	// flexible with the type of the animal. We can easily add any
	// animal just by adding a new member of the factory family.
	fmt.Println("Sound: " + animal.MakeSound())
	fmt.Println("Description: " + animal.GetDescription())
}
