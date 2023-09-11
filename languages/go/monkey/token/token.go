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

	LTHAN = "<"
	GTHAN = ">"

	// Delimiters
	COMMA  = ","
	SEMI   = ";"
	LPAREN = "("
	RPAREN = ")"
	LBRACE = "{"
	RBRACE = "}"

	// Keywords
	FUNC = "FUNCTION"
	LET  = "LET"
)

var keywords = map[string]TokenType{
	"fn":  FUNC,
	"let": LET,
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
