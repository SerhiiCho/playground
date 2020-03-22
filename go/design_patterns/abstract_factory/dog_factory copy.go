package main

// DogFactory is the family factory member
type DogFactory struct{}

// MakeSound returns the sound of the animal
func (dog DogFactory) MakeSound() string {
	return "woof woof woof"
}

// GetDescription returns short description of the animal
func (dog DogFactory) GetDescription() string {
	return "It is a big and nice dog"
}
