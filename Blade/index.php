<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

use Philo\Blade\Blade;

$blade = new Blade(__DIR__ . '/views', __DIR__ . '/cache');

$users = [
    (object) ['name' => 'Serhii', 'age' => 30],
    (object) ['name' => 'Anna', 'age' => 26],
];

echo $blade->view()->make('hello', compact('users'))->render();