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
			}

			return newError("argument to `len` not supported, got %s", args[0].Type())
		},
	},
}
