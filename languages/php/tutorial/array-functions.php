<?php

declare(strict_types=1);

$numbers = [24, 51, 61, 23, 10, 93, 344];

$operations = [
    'sort array in ascending order' => sort($numbers),
    'sort array in descending order' => rsort($numbers),
    'get the lowest number' => min($numbers),
    'get the highest number' => max($numbers),
    'turn array to string' => implode(' -> ', $numbers),
    'check if number is in array' => in_array(23, $numbers),
];

foreach ($operations as $operation => $result) {
    echo $operation;
    echo PHP_EOL;
    var_dump($result);
    echo '==========================';
    echo PHP_EOL;
}
