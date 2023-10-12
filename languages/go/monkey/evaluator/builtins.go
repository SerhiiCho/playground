package evaluator

import (
	"fmt"
	"monkey/object"
)

var builtins = map[string]*object.Builtin{
	"len":   {Fn: lenBuiltinFunction},
	"first": {Fn: firstBuiltinFunction},
	"last":  {Fn: lastBuiltinFunction},
	"rest":  {Fn: restBuiltinFunction},
	"push":  {Fn: pushBuiltinFunction},
	"puts":  {Fn: putsBuiltinFunction},
}

func lenBuiltinFunction(args ...object.Object) object.Object {
	if len(args) != 1 {
		return newError("wrong number of arguments. got=%d, want=1", len(args))
	}

	switch args := args[0].(type) {
	case *object.String:
		return &object.Integer{Value: int64(len(args.Value))}
	case *object.Array:
		return &object.Integer{Value: int64(len(args.Elements))}
	}

	return newError("argument to `len` not supported, got %s", args[0].Type())
}

func firstBuiltinFunction(args ...object.Object) object.Object {
	if len(args) != 1 {
		msg := "wrong number of arguments for a function 'first'. got=%d, want=1"
		return newError(msg, len(args))
	}

	if args[0].Type() != object.ARRAY_OBJ {
		msg := "argument to a function 'first' must be ARRAY, got %s"
		return newError(msg, args[0].Type())
	}

	arr := args[0].(*object.Array)

	if len(arr.Elements) <= 0 {
		return NULL
	}

	return arr.Elements[0]
}

func lastBuiltinFunction(args ...object.Object) object.Object {
	if len(args) != 1 {
		msg := "wrong number of arguments for a function 'last'. got=%d, want=1"
		return newError(msg, len(args))
	}

	if args[0].Type() != object.ARRAY_OBJ {
		msg := "argument to a function 'last' must be ARRAY, got %s"
		return newError(msg, args[0].Type())
	}

	arr := args[0].(*object.Array)
	arrLength := len(arr.Elements)

	if arrLength <= 0 {
		return NULL
	}

	return arr.Elements[arrLength-1]
}

func restBuiltinFunction(args ...object.Object) object.Object {
	if len(args) != 1 {
		msg := "wrong number of arguments for a function 'rest'. got=%d, want=1"
		return newError(msg, len(args))
	}

	if args[0].Type() != object.ARRAY_OBJ {
		msg := "argument to a function 'rest' must be ARRAY, got %s"
		return newError(msg, args[0].Type())
	}

	arr := args[0].(*object.Array)
	arrLength := len(arr.Elements)

	if arrLength <= 0 {
		return NULL
	}

	newElems := make([]object.Object, arrLength-1, arrLength-1)
	copy(newElems, arr.Elements[1:arrLength])

	return &object.Array{Elements: newElems}
}

func pushBuiltinFunction(args ...object.Object) object.Object {
	if len(args) != 2 {
		msg := "wrong number of arguments for a function 'push'. got=%d, want=2"
		return newError(msg, len(args))
	}

	if args[0].Type() != object.ARRAY_OBJ {
		msg := "the first argument to a function 'push' must be ARRAY, got %s"
		return newError(msg, args[0].Type())
	}

	arr := args[0].(*object.Array)
	arrLength := len(arr.Elements)

	newElems := make([]object.Object, arrLength+1, arrLength+1)
	copy(newElems, arr.Elements)
	newElems[arrLength] = args[1]

	return &object.Array{Elements: newElems}
}

func putsBuiltinFunction(args ...object.Object) object.Object {
	for _, arg := range args {
		fmt.Println(arg.Inspect())
	}

	return NULL
}
