<?php

declare(strict_types=1);

namespace Serhii\Liner\Ast;

class Program implements Node
{
    /**
     * @var array<int, Statement> $statements
     */
    public function __construct(public readonly array $statements)
    {
    }

    public function tokenLiteral(): string
    {
        if (empty($this->statements)) {
            return '';
        }

        return $this->statements[0]->tokenLiteral();
    }

    public function string(): string
    {
        $result = '';

        foreach ($this->statements as $statement) {
            $result .= $statement->string() . PHP_EOL;
        }

        return $result;
    }
}