<?php

declare(strict_types=1);

namespace Serhii\Liner\Ast;

use Serhii\Liner\Token\Token;

readonly class ExpressionStatement implements Statement
{
    public function __construct(
        public Token $token,
        public ?Expression $expression,
    ) {
    }

    public function statementNode()
    {
    }

    public function tokenLiteral(): string
    {
        return $this->token->literal;
    }

    public function string(): string
    {
        if ($this->expression === null) {
            return '';
        }

        return $this->expression->string();
    }
}