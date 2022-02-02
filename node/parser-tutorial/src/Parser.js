/**
 * Letter parser: recursive descent implementation
 */

const {Tokenizer} = require('./Tokenizer')

class Parser {
    constructor() {
        this._string = ''
        this._tokenizer = new Tokenizer()
    }

    /**
     * Parses a string into an AST
     */
    parse(string) {
        this._string = string
        this._tokenizer.init(string)

        // Prime the tokenizer to obtain the first
        // token which is our lookahead. The lookahead is
        // used for predictive parsing.

        this._lookahead = this._tokenizer.getNextToken()

        // Parse recursively starting from the main
        // entry point, the Program:

        return this.Program()
    }

    /**
     * Main entry point
     *
     * Program
     *   : StatementList
     *   ;
     */
    Program() {
        return {
            type: 'Program',
            body: this.StatementList(),
        }
    }

    /**
     * StatementList
     *   : Statement
     *   | StatementList Statement -> Statement Statement Statement Statement
     *   ;
     */
    StatementList(stopLookahead = null) {
        const statementList = [this.Statement()]

        while (this._lookahead !== null && this._lookahead.type !== stopLookahead) {
            statementList.push(this.Statement())
        }

        return statementList
    }

    /**
     * Statement
     *   : ExpressionStatement
     *   | BlockStatement
     *   | EmptyStatement
     *   | VariableStatement
     *   | IfStatement
     *   ;
     */
    Statement() {
        switch (this._lookahead.type) {
            case ';':
                return this.EmptyStatement()
            case 'if':
                return this.IfStatement()
            case '{':
                return this.BlockStatement()
            case 'let':
                return this.VariableStatement()
            default:
                return this.ExpressionStatement()
        }
    }

    /**
     * IfStatement
     *   : 'if' '(' Expression ')' Statement
     *   | 'if' '(' Expression ')' Statement 'else' Statement
     *   ;
     */
    IfStatement() {
        this._eat('if')
        this._eat('(')

        const test = this.Expression()

        this._eat(')')

        const consequent = this.Statement()
        let alternate = null

        if (this._lookahead && this._lookahead.type === 'else') {
            this._eat('else')
            alternate = this.Statement()
        }

        return {
            type: 'IfStatement',
            test,
            consequent,
            alternate,
        }
    }

    /**
     * VariableStatement
     *   : 'let' VariableDeclarationList ';'
     *   ;
     */
    VariableStatement() {
        this._eat('let')

        const declarations = this.VariableDeclarationList()

        this._eat(';')

        return {
            type: 'VariableStatement',
            declarations,
        }
    }

    /**
     * VariableDeclarationList
     *   : VariableDeclaration
     *   | VariableDeclarationList ',' VariableDeclaration
     *   ;
     */
    VariableDeclarationList() {
        const declarations = []

        do {
            declarations.push(this.VariableDeclaration())
        } while (this._lookahead.type === ',' && this._eat(','))

        return declarations
    }

    /**
     * VariableDeclaration
     *   : Identifier OptVariableInitializer
     *   ;
     */
    VariableDeclaration() {
        const id = this.Identifier()

        // Optional variable initializer
        const init = [';', ','].includes(this._lookahead.type)
            ? null
            : this.VariableInitializer()

        return {
            type: 'VariableDeclaration',
            id,
            init,
        }
    }

    /**
     * VariableInitializer
     *   : SIMPLE_ASSIGN AssignmentExpression
     *   ;
     */
    VariableInitializer() {
        this._eat('SIMPLE_ASSIGN')
        return this.AssignmentExpression()
    }

    /**
     * EmptyStatement
     *   : ';'
     *   ;
     */
    EmptyStatement() {
        this._eat(';')

        return {
            type: 'EmptyStatement',
        }
    }

    /**
     * BlockStatement
     *   : '{' OptStatementList '}'
     *   ;
     */
    BlockStatement() {
        this._eat('{')

        const body = this._lookahead.type === '}' ? [] : this.StatementList('}')

        this._eat('}')

        return {
            type: 'BlockStatement',
            body,
        }
    }

    /**
     * ExpressionStatement
     *   : Expression ';'
     *   ;
     */
    ExpressionStatement() {
        const expression = this.Expression()

        this._eat(';')

        return {
            type: 'ExpressionStatement',
            expression,
        }
    }

    /**
     * Expression
     *   : AssignmentExpression
     *   ;
     */
    Expression() {
        return this.AssignmentExpression()
    }

    /**
     * AssignmentExpression
     *   : LogicalOrExpression
     *   | LeftHandSideExpression AssignmentOperator AssignmentExpression
     *   ;
     */
    AssignmentExpression() {
        const left = this.LogicalOrExpression()

        if (!this._isAssignmentOperator(this._lookahead.type)) {
            return left
        }

        return {
            type: 'AssignmentExpression',
            operator: this.AssignmentOperator().value,
            left: this._checkValidAssignmentTarget(left),
            right: this.AssignmentExpression(),
        }
    }

    /**
     * EQUALITY_OPERATOR: ==, !=
     *
     * EqualityOperator
     *   : RelationalExpression EQUALITY_OPERATOR EqualityExpression
     *   | RelationalExpression
     *   ;
     */
    EqualityExpression() {
        return this._BinaryExpression(
            'RelationalExpression',
            'EQUALITY_OPERATOR',
        )
    }

    /**
     * RELATIONAL_OPERATOR: >, >=, <, <=
     *
     * RelationalExpression
     *   : AdditiveExpression
     *   | AdditiveExpression RELATIONAL_OPERATOR AdditiveExpression
     *   ;
     */
    RelationalExpression() {
        return this._BinaryExpression(
            'AdditiveExpression',
            'RELATIONAL_OPERATOR',
        )
    }

    /**
     * LeftHandSideExpression
     *   : Identifier
     *   ;
     */
    LeftHandSideExpression() {
        return this.Identifier()
    }

    /**
     * Identifier
     *   : IDENTIFIER
     *   ;
     */
    Identifier() {
        const name = this._eat('IDENTIFIER').value

        return {
            type: 'Identifier',
            name,
        }
    }

    /**
     * AssignmentOperator
     *   : SIMPLE_ASSIGN
     *   | COMPLEX_ASSIGN
     *   ;
     */
    AssignmentOperator() {
        switch (this._lookahead.type) {
            case 'SIMPLE_ASSIGN':
                return this._eat('SIMPLE_ASSIGN')
            default:
                return this._eat('COMPLEX_ASSIGN')
        }
    }

    /**
     * Logical OR expression.
     *
     * LogicalOrExpression
     *   : LogicalAndExpression LOGICAL_OR LogicalOrExpression
     *   | LogicalOrExpression
     *   ;
     */
    LogicalOrExpression() {
        return this._LogicalExpression('LogicalAndExpression', 'LOGICAL_OR')
    }

    /**
     * Logical AND expression.
     *
     * LogicalAndExpression
     *   : EqualityExpression LOGICAL_AND LogicalAndExpression
     *   | EqualityExpression
     *   ;
     */
    LogicalAndExpression() {
        return this._LogicalExpression('EqualityExpression', 'LOGICAL_AND')
    }

    /**
     * AdditiveExpression
     *   : MultiplicativeExpression
     *   | AdditiveExpression ADDITIVE_OPERATOR MultiplicativeExpression -> MultiplicativeExpression ADDITIVE_OPERATOR MultiplicativeExpression
     *   ;
     */
    AdditiveExpression() {
        return this._BinaryExpression(
            'MultiplicativeExpression',
            'ADDITIVE_OPERATOR',
        )
    }

    /**
     * MultiplicativeExpression
     *   : PrimaryExpression
     *   | MultiplicativeExpression MULTIPLICATIVE_OPERATOR PrimaryExpression -> PrimaryExpression MULTIPLICATIVE_OPERATOR PrimaryExpression
     *   ;
     */
    MultiplicativeExpression() {
        return this._BinaryExpression(
            'PrimaryExpression',
            'MULTIPLICATIVE_OPERATOR',
        )
    }

    _BinaryExpression(builderName, operatorToken) {
        let left = this[builderName]()

        while (this._lookahead.type === operatorToken) {
            const operator = this._eat(operatorToken).value

            const right = this[builderName]()

            left = {
                type: 'BinaryExpression',
                operator,
                left,
                right,
            }
        }

        return left
    }

    _LogicalExpression(builderName, operatorToken) {
        let left = this[builderName]()

        while (this._lookahead.type === operatorToken) {
            const operator = this._eat(operatorToken).value

            const right = this[builderName]()

            left = {
                type: 'LogicalExpression',
                operator,
                left,
                right,
            }
        }

        return left
    }

    /**
     * PrimaryExpression
     *   : Literal
     *   | ParenthesizedExpression
     *   | LeftHandSideExpression
     *   ;
     */
    PrimaryExpression() {
        if (this._isLiteral(this._lookahead.type)) {
            return this.Literal()
        }

        switch (this._lookahead.type) {
            case '(':
                return this.ParenthesizedExpression()
            default:
                return this.LeftHandSideExpression()
        }
    }

    /**
     * ParenthesizedExpression
     *   : '(' Expression ')'
     *   ;
     */
    ParenthesizedExpression() {
        this._eat('(')
        const expression = this.Expression()
        this._eat(')')

        return expression
    }

    /**
     * Literal
     *   : NumericLiteral
     *   | StringLiteral
     *   | BooleanLiteral
     *   | NullLiteral
     *   ;
     */
    Literal() {
        switch (this._lookahead.type) {
            case 'NUMBER':
                return this.NumericLiteral()
            case 'STRING':
                return this.StringLiteral()
            case 'true':
                return this.BooleanLiteral(true)
            case 'false':
                return this.BooleanLiteral(false)
            case 'null':
                return this.NullLiteral()
        }

        throw new SyntaxError(`Literal: unexpected literal production`)
    }

    /**
     * BooleanLiteral
     *   : 'true'
     *   | 'false'
     *   ;
     */
    BooleanLiteral(value) {
        this._eat(value ? 'true' : 'false')
        return {
            type: 'BooleanLiteral',
            value,
        }
    }

    /**
     * NullLiteral
     *   : 'null'
     *   ;
     */
    NullLiteral() {
        this._eat('null')

        return {
            type: 'NullLiteral',
            value: null
        }
    }

    /**
     * StringLiteral
     *   : STRING
     *   ;
     */
    StringLiteral() {
        const token = this._eat('STRING')

        return {
            type: 'StringLiteral',
            value: token.value.slice(1, -1),
        }
    }

    /**
     * NumericLiteral
     *   : NUMBER
     *   ;
     */
    NumericLiteral() {
        const token = this._eat('NUMBER')

        return {
            type: 'NumericLiteral',
            value: Number(token.value)
        }
    }

    /**
     * Expects a token of a given type
     */
    _eat(tokenType) {
        const token = this._lookahead

        if (token === null) {
            throw new SyntaxError(
                `Unexpected end of input, expected: "${tokenType}"`,
            )
        }

        if (token.type !== tokenType) {
            throw new SyntaxError(
                `Unexpected token "${token.value}", expected: "${tokenType}"`,
            )
        }

        // Advance to next token
        this._lookahead = this._tokenizer.getNextToken()

        return token
    }

    _isAssignmentOperator(tokenType) {
        return ['SIMPLE_ASSIGN', 'COMPLEX_ASSIGN'].includes(tokenType)
    }

    _checkValidAssignmentTarget(node) {
        if (node.type === 'Identifier') {
            return node
        }

        throw new SyntaxError('Invalid left-hand side in assignment expression')
    }

    _isLiteral(tokenType) {
        return ['NUMBER', 'STRING', 'true', 'false', 'null'].includes(tokenType)
    }
}

module.exports = {
    Parser,
}