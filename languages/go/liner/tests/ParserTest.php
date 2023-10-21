<?php

declare(strict_types=1);

namespace Serhii\Liner\Tests;

use PHPUnit\Framework\TestCase;
use Serhii\Liner\Ast\ReturnStatement;
use Serhii\Liner\Ast\StringLiteral;
use Serhii\Liner\Ast\PutStatement;
use Serhii\Liner\Ast\ExpressionStatement;
use Serhii\Liner\Ast\Identifier;
use Serhii\Liner\Lexer\Lexer;
use Serhii\Liner\Parser\Parser;

final class ParserTest extends TestCase
{
    /**
     * @dataProvider providerForTestReturnStatements
     */
    public function testReturnStatements(string $input, $expect): void
    {
        $parser = new Parser(new Lexer($input));
        $program = $parser->parseProgram();

        $this->checkErrors($parser);
        $this->assertSame(1, count($program->statements));

        /** @var ReturnStatement $stmt */
        $stmt = $program->statements[0];

        $this->assertInstanceOf(ReturnStatement::class, $stmt);
        $this->assertSame('->', $stmt->tokenLiteral());

        $returnValue = $stmt->value;

        $this->assertSame($expect, $returnValue->value);
    }

    public static function providerForTestReturnStatements(): array
    {
        return [
            ['-> 5.', 5],
            ['-> 923.', 923],
        ];
    }

    public function testIdentifierExpression(): void
    {
        $input = 'name.';

        $parser = new Parser(new Lexer($input));
        $program = $parser->parseProgram();

        $this->checkErrors($parser);
        $this->assertSame(1, count($program->statements));

        /** @var ExpressionStatement $stmt */
        $stmt = $program->statements[0];

        $this->assertInstanceOf(ExpressionStatement::class, $stmt);

        /** @var Identifier $ident */
        $ident = $stmt->expression;

        $this->assertInstanceOf(Identifier::class, $ident);

        $this->assertSame('name', $ident->value);
    }

    /**
     * @dataProvider providerForTestPutStatement
     */
    public function testPutStatement(string $input, string $var, $value): void
    {
        $parser = new Parser(new Lexer($input));
        $program = $parser->parseProgram();

        $this->checkErrors($parser);
        $this->assertSame(1, count($program->statements));

        /** @var PutStatement $stmt */
        $stmt = $program->statements[0];

        $this->assertInstanceOf(PutStatement::class, $stmt);
        $this->assertSame('put', $stmt->tokenLiteral());

        $this->assertSame($var, $stmt->name->value);
        $this->assertSame($value, $stmt->value->value);
    }

    public static function providerForTestPutStatement(): array
    {
        return [
            ['put 5 in age.', 'age', 5],
            ['put 24 in nums.', 'nums', 24],
        ];
    }

    private function checkErrors(Parser $parser): void
    {
        $this->assertEmpty($parser->errors(), "Failed asserting that that there are not errors. Errors: " . implode(' | ', $parser->errors()));
    }

    public function testStringLiteralExpression(): void
    {
        $input = '"Hello world!".';

        $parser = new Parser(new Lexer($input));
        $program = $parser->parseProgram();

        $this->checkErrors($parser);
        $this->assertSame(1, count($program->statements));

        /** @var ExpressionStatement $stmt */
        $stmt = $program->statements[0];

        /** @var StringLiteral $literal */
        $literal = $stmt->expression;

        $this->assertInstanceOf(StringLiteral::class, $literal);
        $this->assertSame('Hello world!', $literal->value);
    }
}