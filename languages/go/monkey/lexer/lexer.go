package lexer

import (
	"monkey/token"
)

type Lexer struct {
	input        string
	position     int  // points to position of the char
	nextPosition int  // points to the next char in the input
	char         byte // current char under examination
}

func New(input string) *Lexer {
	l := &Lexer{input: input}
	l.advanceChar()

	return l
}

// NextToken looks at current char and returns a token
// depending on which character it is
func (l *Lexer) NextToken() token.Token {
	var tok token.Token

	l.skipWhitespace()

	switch l.char {
	case '"':
		tok.Type = token.STRING
		tok.Literal = l.readString()
	case '=':
		tok = l.chooseEqualToken()
	case '!':
		tok = l.chooseNotEqualToken()
	case ';':
		tok = newToken(token.SEMI, ";")
	case '/':
		tok = newToken(token.SLASH, "/")
	case '[':
		tok = newToken(token.LBRACKET, "[")
	case ']':
		tok = newToken(token.RBRACKET, "]")
	case ':':
		tok = newToken(token.COLON, ":")
	case '*':
		tok = newToken(token.ASTERISK, "*")
	case '<':
		tok = newToken(token.LTHAN, "<")
	case '>':
		tok = newToken(token.GTHAN, ">")
	case '(':
		tok = newToken(token.LPAREN, "(")
	case ')':
		tok = newToken(token.RPAREN, ")")
	case ',':
		tok = newToken(token.COMMA, ",")
	case '+':
		tok = newToken(token.PLUS, "+")
	case '-':
		tok = newToken(token.MINUS, "-")
	case '{':
		tok = newToken(token.LBRACE, "{")
	case '}':
		tok = newToken(token.RBRACE, "}")
	case 0:
		tok.Literal = ""
		tok.Type = token.EOF
	default:
		if isLetter(l.char) {
			tok.Literal = l.readIdentifier()
			tok.Type = token.LookupIdent(tok.Literal)
			return tok
		}

		if isDigit(l.char) {
			tok.Literal = l.readNumber()
			tok.Type = token.INT
			return tok
		}

		tok = newToken(token.ILLEGAL, string(l.char))
	}

	l.advanceChar()

	return tok
}

func (l *Lexer) readString() string {
	pos := l.position + 1

	for {
		prev := l.char

		l.advanceChar()

		if (l.char == '"' || l.char == 0) && prev != '\\' {
			break
		}
	}

	return l.input[pos:l.position]
}

func (l *Lexer) chooseEqualToken() token.Token {
	if l.peekChar() == '=' {
		l.advanceChar()
		return newToken(token.EQ, "==")
	}

	return newToken(token.ASSIGN, "=")
}

func (l *Lexer) chooseNotEqualToken() token.Token {
	if l.peekChar() == '=' {
		l.advanceChar()
		return newToken(token.NOT_EQ, "!=")
	}

	return newToken(token.BANG, "!")
}

// advanceChar gives us the next character and advances
// our position in the input string
func (l *Lexer) advanceChar() {
	if l.nextPosition >= len(l.input) {
		l.char = 0
	} else {
		l.char = l.input[l.nextPosition]
	}

	l.position = l.nextPosition
	l.nextPosition += 1
}

// peekChar is the same as advanceChar except it doesn't
// increment the position
func (l *Lexer) peekChar() byte {
	if l.nextPosition >= len(l.input) {
		return 0
	}

	return l.input[l.nextPosition]
}

func (l *Lexer) skipWhitespace() {
	for l.char == ' ' || l.char == '\t' || l.char == '\n' || l.char == '\r' {
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

func isDigit(char byte) bool {
	return '0' <= char && char <= '9'
}

func isLetter(char byte) bool {
	return 'a' <= char && char <= 'z' || 'A' <= char && char <= 'Z' || char == '_'
}

// newToken creates a token based on the provided data
func newToken(tokenType token.TokenType, literal string) token.Token {
	return token.Token{
		Type:    tokenType,
		Literal: literal,
	}
}
