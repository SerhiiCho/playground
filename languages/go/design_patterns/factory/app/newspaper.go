package app

import "fmt"

type newspaper struct {
	publication
}

func (n *newspaper) String() string {
	return fmt.Sprintf("This is a newspaper named %s", n.name)
}

func createNewspaper(name string, pages int, publisher string) IPublication {
	return nil
}
