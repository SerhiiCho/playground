package token

type TokenType string

const (
	ILLEGAL = "ILLEGAL"
	EOF     = "EOF"
	INT     = "INT"

	// Delimiters
	SEMI = ";"

	// Keywords
	RETURN = "ret"
)

var keyword = map[string]TokenType{
	"ret": RETURN,
}

type Token struct {
	Type    TokenType
	Literal string
}

func LookupIdentifier(ident string) TokenType {
	if tok, ok := keyword[ident]; ok {
		return tok
	}

	return ILLEGAL
}
