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
        name "Serhii"
        age 44
        ';

        $tests = [
            new Token(TokenType::IDENT, 'name'),
            new Token(TokenType::ASSIGN, '='),
            new Token(TokenType::STR, 'Serhii'),
            new Token(TokenType::SEMI, ';'),
            new Token(TokenType::IDENT, 'age'),
            new Token(TokenType::ASSIGN, '='),
            new Token(TokenType::INT, '44'),
            new Token(TokenType::SEMI, ';'),
        ];

        $lexer = new Lexer($input);

        foreach ($tests as $expectToken) {
            $actualToken = $lexer->nextToken();

            if ($expectToken->type !== $actualToken->type) {
                $this->fail("Token types are different, expect {$expectToken->type->value}, got={$actualToken->type->value}");
            }

            if ($expectToken->literal !== $actualToken->literal) {
                $this->fail("Token literals are different, expect {$expectToken->literal}, got={$actualToken->literal}");
            }
        }
    }
}