<?php

declare(strict_types=1);

namespace Serhii\Liner\Token;

readonly class Token
{
    public function __construct(
        public TokenType $type,
        public string $literal,
    ) {
    }
}
