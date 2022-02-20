# Building a Parser from scratch

- [Link to the lessons](https://www.udemy.com/course/parser-from-scratch)
- [Ast node](#ast-node)
- [Parsing pipeline](#parsing-pipeline)
- [Parser](#parser)
- [Backus-Naur form grammar](#backus-naur-form-grammar)
- [Recursive-descent parser](#recursive-descent-parser-rdp)
- [Other notes](#other-notes)

## Ast node

> **AST** is an abstract syntax tree. It can be in any format like S-expression or JSON.

- You can abstract AST from the parser and make it support any AST nodes using factories;

```
String: "7 + 3 * 4"
```

```js
{
    type: "Program",
    body: [
        {
            type: "BinaryExpression",
            operator: "+",
            left: {
                type: "NumericLiteral",
                value: 7,
            },
            right: {
                type: "BinaryExpression",
                operator: "*",
                left: {
                    type: 'NumericLiteral',
                    value: 3,
                },
                right: {
                    type: 'NumericLiteral',
                    value: 4,
                },
            },
        }
    ],
}
```

## Parsing pipeline

`[print "hello"]`

-> `[Tokenizer, Lexer (lexical analysis)]`

-> `[Tokens [ID: "print"], [STRING: "hello"]]`

-> `[Parser (syntactic analysis)]`

-> `[AST: <Call name="print" args=["hello"]/>]`

## Parser

> The purpose of the parser is validation of the input. But on practice, the parser produces the next intermediate representation known as Abstract Syntax Tree (AST).

- **Parser** is defined as Backus-Naur form (BNF);
- **Parser** should enforce the correct precedence of operations;
- **Parsers** can be `Hand-written` and `Automatically generated`;
- The most practical (and the most powerful) parser is known as [Recursive-descent parser (RDP)](#recursive-descent-parser-rdp);
- Automated parsers. [Parser generator tool](https://github.com/dmitrysoshnikov/syntax) is the language agnostic parser generator;
- **Parser** module is using `tokenizer` for getting tokens from the input string;
- **Parser** has function `eat`, which consumes the current token and advances the tokenizer to the next token. This function should exactly expect the current lookahead to be of this type. In other words, we call `eat` function only when we know that lookahead is certain type. This function not only eats the token buy also returns it;

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

## Tokenizer

**Tokenizer** defines lexical analysis. The purpose of the **Tokenizer** is to group individual characters into recognizable stream of tokens. The purpose is just to group the characters into higher abstracted entities. Since it's more convenient to work with tokens versus the individual characters.

- **Tokenizer** uses regular expressions;
- **Tokenizer** is not responsible for validation, the **Parser** does;
- **Tokenizer** tracks the position of each character;
- **Token** always has `type` and `value`. For example type is `NUMBER` and value is `22`;

## Recursive-descent parser RDP

**Recursive-descent parser** is known as **Predictive parser**. It means it can predict specific production based on looking ahead at the current token. First token in tokenizer is our lookahead. The lookahead is used for predictive parsing. We extract the first token and based on this token will will be able to route parsing process accordingly.

Because we need only one token to lookahead, such parser corresponds to the LL(1) parser in the automated parsing theory, that is we need only one lookahead to correctly predict which production to parse.

## Other notes

- The program is just a list of expression statements, variable statements or block statements;
- Every expression statement has expression as a key;
- **S-expression** is an AST (abstract syntax tree) format that fits the best for interpreters;
- **Program** AST node returns list of statements **StatementList**. Statements will be multiple types;
- The lowest precedence is always on the top of the EST node, in program it will be executed at the end. For example `x = 10 + 1`, in this example assignment has the lowest precedence, it will be the first in EST code in the expression. Because first we need is to execute `10 + 1`, and after we get the result `11`, we should assign it to the identifier `x`;
- **Unary expression** is the expression that has only one operand, in JavaScript it's logical not `!` and minus `-` operators that we put before the expression. They called **unary operators**;
- For the **left recursion** we use while loop;