package token

type TokenType string

const (
	ILLEGAL = "ILLEGAL"
	EOF     = "EOF"
	INT     = "INT"
	IDENT   = "IDENT"

	// Delimiters
	SEMI     = ";"
	LBRACKET = "["
	RBRACKET = "]"

	// Operators
	PLUS   = "+"
	ASSIGN = "="

	EQ = "=="

	// Keywords
	RETURN = "ret"
	IF     = "if"
)

var keyword = map[string]TokenType{
	"ret": RETURN,
	"if":  IF,
}

type Token struct {
	Type    TokenType
	Literal string
}

func LookupIdentifier(ident string) TokenType {
	if tok, ok := keyword[ident]; ok {
		return tok
	}

	return IDENT
}
