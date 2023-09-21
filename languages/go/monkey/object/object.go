package object

const (
	INTEGER_OBJ = "INTEGER"
)

type ObjectType string

type Object interface {
	Type() string
	Inspect() string
}
