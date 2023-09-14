package lexer

import (
	"marf/token"
)

type Lexer struct {
	input        string
	position     int
	nextPosition int
	char         byte
}

func New(inp string) *Lexer {
	l := &Lexer{input: inp}
	l.advanceChar()

	return l
}

func (l *Lexer) NextToken() token.Token {
	var tok token.Token

	l.skipWhitespace()

	switch l.char {
	case ';':
		tok = newToken(token.SEMI, ";")
	case '+':
		tok = newToken(token.PLUS, "+")
	case '[':
		tok = newToken(token.LBRACKET, "[")
	case ']':
		tok = newToken(token.RBRACKET, "]")
	case '=':
		if l.peekChar() == '=' {
			l.advanceChar()
			tok = newToken(token.EQ, "==")
		} else {
			tok = newToken(token.ASSIGN, "=")
		}
	default:
		if isLetter(l.char) {
			tok.Literal = l.readIdentifier()
			tok.Type = token.LookupIdentifier(tok.Literal)
			return tok
		}

		if isDigit(l.char) {
			tok.Literal = l.readNumber()
			tok.Type = token.INT
			return tok
		}
	}

	l.advanceChar()

	return tok
}

func (l *Lexer) peekChar() byte {
	if l.nextPosition >= len(l.input) {
		return 0
	}

	return l.input[l.nextPosition]
}

func (l *Lexer) skipWhitespace() {
	for l.char == ' ' || l.char == '\n' || l.char == '\t' || l.char == '\r' {
		l.advanceChar()
	}
}

func (l *Lexer) readIdentifier() string {
	position := l.position

	for isLetter(l.char) {
		l.advanceChar()
	}

	return l.input[position:l.position]
}

func (l *Lexer) readNumber() string {
	position := l.position

	for isDigit(l.char) {
		l.advanceChar()
	}

	return l.input[position:l.position]
}

func (l *Lexer) advanceChar() {
	if l.nextPosition >= len(l.input) {
		l.char = 0
	} else {
		l.char = l.input[l.nextPosition]
	}

	l.position = l.nextPosition
	l.nextPosition += 1
}

func isLetter(char byte) bool {
	return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char == '_'
}

func isDigit(char byte) bool {
	return char >= '0' && char <= '9'
}

func newToken(tokenType token.TokenType, literal string) token.Token {
	return token.Token{
		Type:    tokenType,
		Literal: literal,
	}
}
