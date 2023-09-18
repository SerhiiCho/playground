package ast

import (
	"bytes"
	"monkey/token"
)

type BlockStatement struct {
	Token      token.Token
	Statements []Statement
}

func (bs *BlockStatement) statementNode() {
}

func (bs *BlockStatement) TokenLiteral() string {
	return bs.Token.Literal
}

func (bs *BlockStatement) String() string {
	var out bytes.Buffer

	for _, st := range bs.Statements {
		out.WriteString(st.String())
	}

	return out.String()
}
