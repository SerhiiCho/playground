# Parsers

- [Ast node](#ast-node)
- [Parsing pipeline](#parsing-pipeline)
- [Parser](#parser)
- [Backus-Naur form grammar](#backus-naur-form-grammar)
- [Other notes](#other-notes)

## Ast node

> **S-expression** is an AST (abstract syntax tree) format that fits the best for interpreters.

> **AST** is an abstract syntax tree.

## Parsing pipeline

`[print "hello"]`

-> `[Tokenizer, Lexer (lexical analysis)]`

-> `[Tokens [ID: "print"], [STRING: "hello"]]`

-> `[Parser (syntactic analysis)]`

-> `[AST: <Call name="print" args=["hello"]/>]`

> **Tokenizer** defines lexical analysis. The purpose of Tokenizer is to group individual characters into recognizable stream of tokens. The purpose is just to group the characters into higher abstracted entities. Since it's more convenient to work with tokens versus the individual characters.

- Tokenizer uses regular expressions;
- Tokenizer is not responsible for validation, the Parser does;

# Parser

> The purpose of the parser is validation of the input. But on practice, the parser produces the next intermediate representation known as Abstract Syntax Tree (AST).

- Parser is defined as Backus-Naur form (BNF).

## Backus-Naur form grammar

> Backus-Naur form is a notation to describe syntax and grammars of languages.

In the example below, the `Program` is the main entry point into the program. The program consists of `StatementList`. The `StatementList` is the list of `Statement`, and each `Statement` might be anything, for example in our case it can be `BlockStatement`, `IfStatement`, `FunctionDeclaration`, etc.

The last step is recursively define each production and describing what it means. For example `FunctionDeclaration` is described as the `def` keyword followed by the function name which is `Identifier`, followed by `Arguments` in parenthesis, and followed by a function body which is nothing buy the `BlockStatement`.

```
Program
    : StatementList
    ;

Statement
    : BlockStatement
    | IfStatement
    | FunctionDeclaration
    ...
    ;

FunctionDeclaration
    : def Identifier ( Arguments ) BlockStatement
    ;
```

## Other notes

- The program is just a list of expression statements or variable statements.
- Every expression statement has expression as a key.