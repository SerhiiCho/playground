package main

import (
	"fmt"
	"monkey/repl"
	"os"
)

func main() {
	fmt.Print("Interactive shell for Monkey language\n\n")
	repl.Start(os.Stdin, os.Stdout)
}
