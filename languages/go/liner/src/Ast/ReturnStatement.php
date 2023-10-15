<?php

declare(strict_types=1);

namespace Serhii\Liner\Ast;

use Serhii\Liner\Token\Token;

readonly class ReturnStatement implements Statement
{
    public function __construct(
        public Token $token,
        public Expression $value,
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
        $value = $this->value->string();
        return "-> {$value}.";
    }
}