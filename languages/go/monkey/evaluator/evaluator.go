package evaluator

import (
	"monkey/ast"
	"monkey/object"
)

func Eval(node ast.Node) object.Object {
	switch node := node.(type) {

	// Statements
	case *ast.Program:
		return evalStatements(node.Statements)

	case *ast.ExpressionStatement:
		return Eval(node.Expression)

	// Expressions
	case *ast.IntegerLiteral:
		return &object.Integer{Value: node.Value}
	}

	program, isProgram := node.(*ast.Program)

	if isProgram {
		lastSt := len(program.Statements) - 1

		for i, st := range program.Statements {
			evaluated := Eval(st)

			if i == lastSt {
				return evaluated
			}
		}
	}

	return nil
}

func evalStatements(statements []ast.Statement) object.Object {
	var result object.Object

	for _, st := range statements {
		result = Eval(st)
	}

	return result
}
