<?php

declare(strict_types=1);

namespace Serhii\Liner\Ast;

use Serhii\Liner\Token\Token;

readonly class IntegerLiteral implements Expression
{
    public function __construct(
        public Token $token,
        public int $value,
    ) {
    }

    public function expressionNode()
    {
    }

    public function tokenLiteral(): string
    {
        return $this->token->literal;
    }

    public function string(): string
    {
        return $this->token->literal;
    }
}