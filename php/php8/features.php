<?php

$string = 'Some string is here';

$string_contains = str_contains($string, 'string');
$string_starts = str_starts_with($string, 'Some');
$string_ends = str_ends_with($string, 'here');
$var_type = get_debug_type($string);

// Match
$name = 'Anna';
$her_name = match($name) {
    'Anna' => 'This is Anna',
    'Serhii' => 'This is Serhii',
    default => throw new Exception('Doesnt match any names'),
};

// Named
$html_chars = htmlspecialchars('Some string', double_encode: false);

var_dump($html_chars);