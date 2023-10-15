<?php

declare(strict_types=1);

namespace Serhii\Liner\Tests;

use PHPUnit\Framework\TestCase;

final class ParserTest extends TestCase
{
    /**
     * @dataProvider providerForTestPutStatements
     */
    public function testPutStatements(): void
    {
        //
    }

    private static function providerForTestPutStatements(): array
    {
        return [
            ['put 5 in x.', 'x', 5],
            ['put "Anna and Serhii" in word.', 'word', "Anna and Serhii"],
        ];
    }
}