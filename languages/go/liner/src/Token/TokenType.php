<?php

declare(strict_types=1);

namespace Serhii\Liner\Token;

enum TokenType: string {
    case ILLEGAL = 'ILLEGAL';
    case IDENT = 'IDENT';
    case INT = 'INTEGER';
    case STR = 'STRING';
    case EOF = '';

    case SEMI = ';';
    case ASSIGN = '->';
    case LBRACE = '(';
    case RBRACE = ')';
}
