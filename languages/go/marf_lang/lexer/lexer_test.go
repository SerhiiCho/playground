package lexer

import (
	"marf/token"
	"testing"
)

func TestLexer(t *testing.T) {
	input := `
	ret 55;
	`

	tests := []struct {
		expectType    token.TokenType
		expectLiteral string
	}{
		{token.RETURN, "ret"},
		{token.INT, "55"},
		{token.SEMI, ";"},
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
