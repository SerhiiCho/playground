<?php

declare(strict_types=1);

namespace Serhii\Liner\Lexer;

use Serhii\Liner\Token\Token;
use Serhii\Liner\Token\TokenType;

class Lexer
{
    private int $position;
    private int $nextPosition;
    private string $input;
    private string $char;

    public function __construct(string $input)
    {
        $this->position = 0;
        $this->nextPosition = 1;
        $this->input = $input;
    }

    public function nextToken(): Token
    {
        $this->advanceChar();

        $token = null;

        return new Token(TokenType::ILLEGAL, $this->char);
    }

    private function advanceChar(): void
    {
        if ($this->nextPosition >= strlen($this->input)) {
            $this->char = '';
        } else {
            $this->char = $this->input[$this->nextPosition];
        }

        $this->position = $this->nextPosition;
        $this->nextPosition += 1;
    }
}
