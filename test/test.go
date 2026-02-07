package main

type Expression interface {
	expressionStmt()
}

type IllegalNode struct{}

func (ln *IllegalNode) expressionStmt() {}

func main() {
	example1()
}

func example1() {
	var slice []Expression

	illegal := &IllegalNode{}

	slice = append(slice, illegal)
}

func example2() {
	var slice []*Expression

	illegal := &IllegalNode{}
	var expr Expression = illegal // Wrap in interface type

	slice = append(slice, &expr) // Store pointer to interface
}
