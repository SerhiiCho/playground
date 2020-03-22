<?php

declare(strict_types=1);

use React\EventLoop\Factory;
use React\Stream\ReadableResourceStream;
use React\Stream\WritableResourceStream;

require 'vendor/autoload.php';

$loop = Factory::create();

$write = new WritableResourceStream(STDOUT, $loop);
$read = new ReadableResourceStream(STDIN, $loop);

// THIS CAN BE REPLACED WITH PIPE BELOW
// $read->on('data', function ($chunk) use ($write) {
//     $write->write('Hello world');
// });

$read->pipe($write);

$loop->run();

// echo 'Hello' | php stream-write.php