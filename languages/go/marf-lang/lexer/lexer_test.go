package lexer

import (
	"marf/token"
	"testing"
)

func TestLexer(t *testing.T) {
	input := `
	ret 56;
	1289 + 247;

	summerTime = 5;

	if 23 == 2 [
		ret 0;
	]
	`

	tests := []struct {
		expectType    token.TokenType
		expectLiteral string
	}{
		{token.RETURN, "ret"},
		{token.INT, "56"},
		{token.SEMI, ";"},
		{token.INT, "1289"},
		{token.PLUS, "+"},
		{token.INT, "247"},
		{token.SEMI, ";"},
		{token.IDENT, "summerTime"},
		{token.ASSIGN, "="},
		{token.INT, "5"},
		{token.SEMI, ";"},
		{token.IF, "if"},
		{token.INT, "23"},
		{token.EQ, "=="},
		{token.INT, "2"},
		{token.LBRACKET, "["},
		{token.RETURN, "ret"},
		{token.INT, "0"},
		{token.SEMI, ";"},
		{token.RBRACKET, "]"},
	}

	l := New(input)

	for _, tt := range tests {
		testName := "expect literal to be " + tt.expectLiteral

		t.Run(testName, func(test *testing.T) {
			tok := l.NextToken()

			if tok.Literal != tt.expectLiteral {
				test.Fatalf("tok.Literal must be %q. Got %q", tt.expectLiteral, tok.Literal)
			}

			if tok.Type != tt.expectType {
				test.Fatalf("tok.Type must be %q. Got %q", tt.expectType, tok.Type)
			}
		})
	}
}
