<?php

namespace PHP81;

require_once __DIR__ . '/../vendor/autoload.php';

// RFC: https://wiki.php.net/rfc/first_class_callable_syntax

$names = ['Anna', 'Alex', 'Sam', 'Billy', 'Taylor', 'Rasmus'];

$result = array_map(strtoupper(...), $names);

dump($result);

$names = ['An na', 'A lex', 'Sa m', 'B illy', 'Taylo r', 'R asmus'];

$result = array_map(static fn(string $name) => str_replace(' ', '', $name), $names);

dd($result);