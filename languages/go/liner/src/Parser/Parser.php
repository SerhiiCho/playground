<?php

declare(strict_types=1);

namespace Serhii\Liner\Parser;

use Serhii\Liner\Ast\Program;
use Serhii\Liner\Ast\PutStatement;
use Serhii\Liner\Ast\Statement;
use Serhii\Liner\Lexer\Lexer;
use Serhii\Liner\Token\Token;
use Serhii\Liner\Token\TokenType;

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

        while (!$this->curTokenIs(TokenType::EOF)) {
            $statements[] = $this->parseStatement();
        }

        return new Program($statements);
    }

    private function curTokenIs(TokenType $tokenType): bool
    {
        return $this->curToken->type === $tokenType;
    }

    private function nextToken(): void
    {
        $this->curToken = $this->peekToken;
        $this->peekToken = $this->lexer->nextToken();
    }

    private function parseStatement(): Statement
    {
        return match($this->curToken->type) {
            TokenType::PUT => $this->parsePutStatement(),
            default => $this->parseExpressionStatement(),
        };
    }

    private function parsePutStatement(): PutStatement
    {
        return new PutStatement()
    }

    private function parseExpressionStatement()
    {
        #
    }
}