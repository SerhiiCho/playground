package main

import (
	"fmt"
	"log"
	"os"
)

var (
	command string
	key     string
	value   string
)

func main() {
	if len(os.Args) != 3 || len(os.Args) != 4 {
		log.Fatalf("There must be 3 or 4 arguments instead of %d\n", len(os.Args))
	}

	command = os.Args[1]

	switch command {
	case "set":
		handleSetCommand()
	case "get":
		handleGetCommand()
	default:
		log.Fatalln("Command must be `set` or `get`")
	}

	key = os.Args[2]
	value = os.Args[3]

	fmt.Println()
}

func handleSetCommand() {

}

func handleGetCommand() {

}
