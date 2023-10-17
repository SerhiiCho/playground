<?php

declare(strict_types=1);

namespace Serhii\Liner\Tests;

use PHPUnit\Framework\TestCase;
use Serhii\Liner\Ast\ReturnStatement;
use Serhii\Liner\Lexer\Lexer;
use Serhii\Liner\Parser\Parser;

final class ParserTest extends TestCase
{
    /**
     * @dataProvider providerForTestReturnStatements
     */
    public function testReturnStatements(string $input, $expect): void
    {
        $lexer = new Lexer($input);
        $parser = new Parser($lexer);
        $program = $parser->parseProgram();

        $this->assertEmpty($parser->errors(), "Failed asserting that that there are not errors. Errors: " . implode(' | ', $parser->errors()));
        $this->assertSame(1, count($program->statements));

        /** @var ReturnStatement $stmt */
        $stmt = $program->statements[0];

        $this->assertInstanceOf(ReturnStatement::class, $stmt);
    }

    public static function providerForTestReturnStatements(): array
    {
        return [
            ['-> 5.', 5],
            ['-> 245.', 245],
        ];
    }
}