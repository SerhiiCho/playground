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
            "Serhii" -> name;
            33 -> age;
        ';

        $tests = [
            new Token(TokenType::STR, 'Serhii'),
            new Token(TokenType::ASSIGN, '->'),
            new Token(TokenType::IDENT, 'name'),
            new Token(TokenType::SEMI, ';'),
            new Token(TokenType::INT, '33'),
            new Token(TokenType::ASSIGN, '->'),
            new Token(TokenType::IDENT, 'age'),
            new Token(TokenType::SEMI, ';'),
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