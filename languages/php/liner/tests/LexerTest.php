<?php

declare(strict_types=1);

namespace Serhii\Liner\Tests;

use Serhii\Liner\Token\TokenType;
use Serhii\Liner\Token\Token;
use PHPUnit\Framework\TestCase;
use Serhii\Liner\Lexer\Lexer;

final class LexerTest extends TestCase
{
    public function testLexerParsesTokens(): void
    {
        $input = '
            put "Serhii" in name.
            put 33 in age.

            say(name).

            -> 22.
        ';

        $tests = [
            new Token(TokenType::PUT, 'put'),
            new Token(TokenType::STR, 'Serhii'),
            new Token(TokenType::IN, 'in'),
            new Token(TokenType::IDENT, 'name'),
            new Token(TokenType::PERIOD, '.'),

            new Token(TokenType::PUT, 'put'),
            new Token(TokenType::INT, '33'),
            new Token(TokenType::IN, 'in'),
            new Token(TokenType::IDENT, 'age'),
            new Token(TokenType::PERIOD, '.'),

            new Token(TokenType::IDENT, 'say'),
            new Token(TokenType::LBRACE, '('),
            new Token(TokenType::IDENT, 'name'),
            new Token(TokenType::RBRACE, ')'),
            new Token(TokenType::PERIOD, '.'),

            new Token(TokenType::RETURN, '->'),
            new Token(TokenType::INT, '22'),
            new Token(TokenType::PERIOD, '.'),

            new Token(TokenType::EOF, ''),
        ];

        $lexer = new Lexer($input);

        foreach ($tests as $expectToken) {
            $actualToken = $lexer->nextToken();

            $msg = "Token types are different, expect {$expectToken->type->value}, got={$actualToken->type->value}";
            $this->assertEquals($expectToken->type, $actualToken->type, $msg);

            $msg = "Token literals are different, expect {$expectToken->literal}, got={$actualToken->literal}";
            $this->assertSame($expectToken->literal, $actualToken->literal, $msg);
        }

        $this->assertTrue(true);
    }
}