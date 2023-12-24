<?php

declare(strict_types=1);


function lazyRange(int $min, int $max): Generator
{
    for ($min; $min <= $max; $min++) {
        yield $min;
    }
}

foreach (lazyRange(1, 9_999_999) as $value) {
    echo $value . PHP_EOL;
}