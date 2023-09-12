package parser

import (
	"monkey/ast"
	"monkey/lexer"
	"monkey/token"
)

type Parser struct {
	lex       *lexer.Lexer
	curToken  token.Token
	peekToken token.Token
}

func New(lex *lexer.Lexer) *Parser {
	p := &Parser{lex: lex}

	// Read two tokens, so curToken and peekToken are set
	p.nextToken()
	p.nextToken()

	return p
}

func (p *Parser) nextToken() {
	p.curToken = p.peekToken
	p.peekToken = p.lex.NextToken()
}

func (p *Parser) ParseProgram() *ast.Program {
	return nil
}
