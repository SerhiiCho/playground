<?php

declare(strict_types=1);

use React\EventLoop\Factory;

require 'vendor/autoload.php';

$loop = Factory::create();

$loop->addTimer(0, function () {
    print_r(doSome(10000000));
});

print_r(doSome(900000));

$loop->run();

function doSome(int $num): string {
    $nice = [];

    foreach (range(1, $num) as $item) {
        $nice[] = $item;
    }

    return count($nice) . PHP_EOL;
}