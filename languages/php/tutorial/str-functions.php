<?php

declare(strict_types=1);

$str = 'The quick brown fox jumps over the lazy dog';

// find position of the string
strstr($str, 'brown'); // brown fox jumps over the lazy dog

// find position of the string from 0 position to 5
substr($str, 0, 5); // The q

// find position of the string from j position to end
strchr($str, 'j'); // jumps over the lazy dog

// find string inside a different string and return the position
strpos($str, 'brown'); // 10

// replace string with string
str_replace('brown', 'red', $str); // The quick red fox jumps over the lazy dog

// repeat string n times
str_repeat('nice ', 3); // nice nice nice
