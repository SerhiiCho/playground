# Valid Language

## Validation

When you pass, for example, -2 to the function that excepts int<0>, it will throw a validation error. All the type errors are validation errors and you can set your own validation error messages in different languages.

## Labels
Every keyword in the language that starts from ':' is a label. Labels refer to the interpreter to tell the intention of certain actions. Labels are used to define variables, functions, routes, etc. Here is a list of all the labels:

- `:v` - Define a variable
- `:f` - Define a function
- `:routes` - Define routes
- `:params` - Define parameters in POST, GET, PUT, DELETE requests
- `:use` - Use a file

## Scope
- Opening and closing curly braces define scope of the function, route, etc. You can even just use these braces like this:

    ```
    {
        :v a int<1> = 1
        :v b int<1> = 2
        :v c int<1> = a + b
    }
    ```

    It just means that the code inside the braces will be executed in it's own scope instead of the global scope. Variables a, b and c will not be accessible outside of the braces.


## Facts about the Valid

- Language keywords are start with a colon (:)