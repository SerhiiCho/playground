<?php

declare(strict_types=1);

require 'vendor/autoload.php';

use React\Socket\Server;
use React\EventLoop\Factory;

$loop = Factory::create();

$server = new Server('127.0.0.1:8000', $loop);

echo 'Server started on http://localhost:8000';
$server->on('connection', function ($conn) {
    $conn->write('Hello');
});

$loop->run();
