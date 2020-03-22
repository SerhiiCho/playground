package main

import (
	"errors"
	"fmt"
	"log"
)

// PropContainerInterface defines container behavior
type PropContainerInterface interface {
	AddProp(string, interface{})
	SetProp(string, interface{}) error
	DeleteProp(string)
	GetProp(string) interface{}
}

// PropContainer implementation
type PropContainer struct {
	Props map[string]interface{}
}

// AddProp adds value to a map
func (prop *PropContainer) AddProp(name string, value interface{}) {
	prop.Props[name] = value
}

// GetProp gets the value from a map
func (prop PropContainer) GetProp(name string) interface{} {
	if _, exist := prop.Props[name]; !exist {
		return nil
	}

	return prop.Props[name]
}

// DeleteProp removes property from map
func (prop *PropContainer) DeleteProp(name string) {
	if _, exist := prop.Props[name]; !exist {
		return
	}

	delete(prop.Props, name)
}

// SetProp replaces value in map with a new value
func (prop *PropContainer) SetProp(name string, value interface{}) error {
	if _, exist := prop.Props[name]; exist {
		prop.Props[name] = value
		return nil
	}

	return errors.New("There is not property with the name " + name)
}

func main() {
	container := PropContainer{
		make(map[string]interface{}),
	}
	exec(&container)
}

func exec(prop PropContainerInterface) {
	// adding new properties
	prop.AddProp("name", "Serhii")
	prop.AddProp("age", 20)

	// setting the property
	if err := prop.SetProp("name", "Anna"); err != nil {
		log.Fatal(err)
	}

	// deleting age property
	prop.DeleteProp("age")

	fmt.Printf("Should get Anna and result is %v\n", prop.GetProp("name"))
	fmt.Printf("Should get nil and result is %v\n", prop.GetProp("age"))
}
