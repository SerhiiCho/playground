<?php

declare(strict_types=1);

namespace Serhii\Liner\Ast;

use Serhii\Liner\Token\Token;

readonly class PutStatement implements Statement
{
    /**
     * @var array<int, Statement> $statements
     */
    public function __construct(
        public Token $token,
        public Identifier $name,
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
        $ident = $this->name->string();

        return "put {$value} in {$ident}.";
    }
}