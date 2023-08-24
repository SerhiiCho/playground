package app

import "fmt"

func NewPublication(pubType string, name string, pg int, pub string) (IPublication, error) {
	// todo

	return nil, fmt.Errorf("Cannot create publication of type %s", pubType)
}
