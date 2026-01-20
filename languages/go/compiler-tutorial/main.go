package main

import (
	"bytes"
	"fmt"
	"log"
	"os"
	"unicode"
)

type TokenType int

const (
	_return TokenType = iota
	intLit
	semi
)

type token struct {
	tokenType TokenType
	value     string
}

func main() {
	if len(os.Args) < 2 {
		log.Fatal("Missing file path. Correct usage is 'hydro <input.hy>'")
	}

	content, err := getFileContent(os.Args[1])

	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("%#v\n", tokenize(content))
}
func tokenize(str string) []token {
	buf := &bytes.Buffer{}
	res := []token{}

	for _, char := range str {
		if unicode.IsLetter(char) {
			buf.WriteRune(char)
		} else if unicode.IsDigit(char) {
			buf.WriteRune(char)
		} else if char == ';' {
			res = append(res, token{tokenType: semi})
		} else if unicode.IsSpace(char) {
			res = append(res, token{tokenType: _return})
		}

		buf.Reset()
	}

	return res
}

func getFileContent(fileName string) (string, error) {
	fileText, err := os.ReadFile(fileName)

	if err != nil {
		return "", err
	}

	return string(fileText), nil
}
