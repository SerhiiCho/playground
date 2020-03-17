<?php

declare(strict_types=1);

use Doctrine\Common\Collections\ArrayCollection;

require_once __DIR__ . '/vendor/autoload.php';

function collect(array $arr): ArrayCollection {
    return new ArrayCollection($arr);
}

$items = collect([
    'nice' => 'hello',
    'nice2' => 'hello2',
]);

$result = $items
    ->map(fn($item) => strtoupper($item))
    ->filter(fn($item) => $item === 'HELLO2')
    ->toArray();

$list = collect(['awesome_', 'nice_', '_cool']);
$res = $list->map(fn($i) => str_replace('_', '', $i));

var_dump($res);
