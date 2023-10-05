package token

const (
	ILLEGAL = "ILLEGAL" // Signifies a token/character we don't know about
	EOF     = "EOF"     // stands for End Of File

	// Identifiers + literals
	IDENT = "IDENT" // add, foobar, x, y, ...
	INT   = "INT"   // 1343456

	// Operators
	ASSIGN   = "="
	PLUS     = "+"
	MINUS    = "-"
	BANG     = "!"
	ASTERISK = "*"
	SLASH    = "/"

	EQ     = "=="
	NOT_EQ = "!="
	LTHAN  = "<"
	GTHAN  = ">"

	// Delimiters
	COMMA  = ","
	SEMI   = ";"
	LPAREN = "("
	RPAREN = ")"
	LBRACE = "{"
	RBRACE = "}"

	STRING = "STRING"

	// Keywords
	FUNC   = "FUNCTION"
	LET    = "LET"
	TRUE   = "TRUE"
	FALSE  = "FALSE"
	IF     = "IF"
	ELSE   = "ELSE"
	RETURN = "RETURN"
)

var keywords = map[string]TokenType{
	"fn":     FUNC,
	"let":    LET,
	"true":   TRUE,
	"false":  FALSE,
	"if":     IF,
	"else":   ELSE,
	"return": RETURN,
}

type TokenType string

type Token struct {
	Type    TokenType
	Literal string
}

// LookupIdent checks if given identifier is a keyword
func LookupIdent(ident string) TokenType {
	if tok, ok := keywords[ident]; ok {
		return tok
	}

	return IDENT // all other user-defined identifiers
}
