package evaluator

import "monkey/object"

var builtins = map[string]*object.Builtin{
	"len": {
		Fn: func(args ...object.Object) object.Object {
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
		},
	},
	"first": {
		Fn: func(args ...object.Object) object.Object {
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
		},
	},
}
