<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

if (file_exists('cache')) {
    $content = file_get_contents('cache');
} else {
    $content = file_get_contents('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
    file_put_contents('cache', $content);
}

$data = json_decode($content);
// dd($data);