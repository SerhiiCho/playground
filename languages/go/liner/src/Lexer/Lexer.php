<?php

declare(strict_types=1);

namespace Serhii\Liner\Lexer;

use Serhii\Liner\Token\Token;
use Serhii\Liner\Token\TokenType;

class Lexer
{
    private int $position = 0;
    private int $nextPosition = 0;
    private string $input;
    private string $char;

    public function __construct(string $input)
    {
        $this->input = $input;
        $this->advanceChar();
    }

    public function nextToken(): Token
    {
        $this->skipWhitespace();

        $token = null;

        if ($this->char === '"') {
            $token = new Token(TokenType::STR, $this->readString());
        } else if ($this->char === '.') {
            $token = new Token(TokenType::PERIOD, $this->char);
        } else if ($this->isLetter()) {
            $ident = $this->readIdentifier();
            return new Token(TokenType::lookupIdentifier($ident), $ident);
        } else if ($this->isNumber()) {
            return new Token(TokenType::INT, $this->readNumber());
        } else if ($this->char === '(') {
            $token = new Token(TokenType::LBRACE, $this->char);
        } else if ($this->char === ')') {
            $token = new Token(TokenType::RBRACE, $this->char);
        } else if ($this->char === '') {
            $token = new Token(TokenType::EOF, '');
        } else {
            $token = new Token(TokenType::ILLEGAL, $this->char);
        }

        $this->advanceChar();

        return $token;
    }

    private function skipWhitespace(): void
    {
        while ($this->char === ' ' || $this->char === "\n" || $this->char === "\t" || $this->char === "\r") {
            $this->advanceChar();
        }
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

    private function peekChar(): string
    {
        if ($this->nextPosition >= strlen($this->input)) {
            return '';
        }

        return $this->input[$this->nextPosition];
    }

    private function isLetter(): bool
    {
        return ctype_alpha($this->char);
    }

    private function isNumber(): bool
    {
        return is_numeric($this->char);
    }

    private function readIdentifier(): string
    {
        $start = $this->position;

        while ($this->isLetter()) {
            $this->advanceChar();
        }

        return substr($this->input, $start, $this->position - $start);
    }

    private function readNumber(): string
    {
        $start = $this->position;

        while ($this->isNumber()) {
            $this->advanceChar();
        }

        return substr($this->input, $start, $this->position - $start);
    }

    private function readString(): string
    {
        $start = $this->position + 1;

        while (true) {
            $prev = $this->char;

            $this->advanceChar();

            if (($this->char === '"' || $this->char === '') && $prev != '\\') {
                break;
            }
        }

        return substr($this->input, $start, $this->position - $start);
    }
}
