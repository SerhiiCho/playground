<?php

declare(strict_types=1);

namespace Serhii\Liner\Token;

enum TokenType: string {
    case PUT = 'PUT';
    case ILLEGAL = 'ILLEGAL';
    case IDENT = 'IDENT';
    case INT = 'INTEGER';
    case STR = 'STRING';
    case IN = 'IN';
    case EOF = '';

    case PERIOD = '.';
    case LBRACE = '(';
    case RBRACE = ')';

    const KEYWORDS = [
        'put' => self::PUT,
        'in' => self::IN,
    ];

    public static function lookupIdentifier(string $tokenLiteral): self
    {
        return self::KEYWORDS[$tokenLiteral] ?? self::IDENT;
    }
}
