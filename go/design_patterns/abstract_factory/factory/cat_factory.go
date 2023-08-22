package factory

// CatFactory is the family factory member
type CatFactory struct{}

// MakeSound returns the sound of the animal
func (cat CatFactory) MakeSound() string {
	return "Mew mew mew"
}

// GetDescription returns short description of the animal
func (cat CatFactory) GetDescription() string {
	return "It is a cute and fat cat"
}
