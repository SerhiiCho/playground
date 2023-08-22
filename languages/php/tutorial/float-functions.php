<?php

declare(strict_types=1);

$examples = [
    'round the number from 1.2 to nearest' => round(1.2),
    'round the number to the highest' => ceil(1.2),
    'round the number to the lowest' => floor(1.2),
];

foreach ($examples as $operation => $example) {
    echo $operation . ' ' . $example . PHP_EOL;
}

