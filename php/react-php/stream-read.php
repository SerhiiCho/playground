<?php

declare(strict_types=1);

use React\EventLoop\Factory;
use React\Stream\ReadableResourceStream;

require 'vendor/autoload.php';

$loop = Factory::create();

// Third arg is buffer size
$readable = new ReadableResourceStream(STDIN, $loop, 1);

// data event
$readable->on('data', function ($chunk) {
    echo $chunk . PHP_EOL;
});

// end event
$readable->on('end', function () {
    echo 'Finished' . PHP_EOL;
});

$loop->run();

// cat test.txt | php stream-read.php
