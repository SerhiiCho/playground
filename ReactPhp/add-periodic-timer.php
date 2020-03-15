<?php declare(strict_types=1);

use React\EventLoop\Factory;
use React\EventLoop\TimerInterface;

require 'vendor/autoload.php';

$loop = Factory::create();
$i = 0;

$timer = $loop->addPeriodicTimer(1, function (TimerInterface $timer) use (&$i, $loop) {
    $i++;

    if ($i === 5) {
        $loop->cancelTimer($timer);
    }

    echo "Run\n";
});

$loop->run();