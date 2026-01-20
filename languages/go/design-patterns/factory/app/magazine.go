package app

import "fmt"

type magazine struct {
	publication
}

func (m *magazine) String() string {
	return fmt.Sprintf("This is a magazine named %s", m.name)
}

func createMagazine(name string, pages int, publisher string) IPublication {
	return &magazine{
		publication: publication{name, pages, publisher},
	}
}
