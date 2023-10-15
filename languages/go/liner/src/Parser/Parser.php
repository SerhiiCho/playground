<?php

declare(strict_types=1);

namespace Serhii\Liner\Parser;

use Serhii\Liner\Ast\Program;
use Serhii\Liner\Ast\Statement;
use Serhii\Liner\Lexer\Lexer;
use Serhii\Liner\Token\Token;

class Parser
{
    private Token $curToken;
    private Token $peekToken;
    private array $errors;

    public function __construct(private Lexer $lexer)
    {
        $this->nextToken();
        $this->nextToken();
    }

    public function parseProgram(): Program
    {
        $statements = [];

        //

        return new Program($statements);
    }

    private function nextToken(): void
    {
        $this->curToken = $this->peekToken;
        $this->peekToken = $this->lexer->nextToken();
    }

    private function parseStatement(): Statement
    {
        return new Statement();
    }
}