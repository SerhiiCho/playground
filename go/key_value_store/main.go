package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	if len(os.Args) != 3 && len(os.Args) != 4 {
		log.Fatalf("There must be 3 or 4 arguments instead of %d\n", len(os.Args))
	}

	command := os.Args[1]

	switch command {
	case "set":
		handleSetCommand(os.Args[2], os.Args[3])
	case "get":
		handleGetCommand(os.Args[4])
	default:
		log.Fatalln("Command must be `set` or `get`")
	}
}

func handleSetCommand(key, value string) {
	fmt.Println(key, value)
}

func handleGetCommand(key string) {
	fmt.Println(key)
}
