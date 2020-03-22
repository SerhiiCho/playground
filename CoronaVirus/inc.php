<?php

declare(strict_types=1);

require_once __DIR__ . '/vendor/autoload.php';

$data = json_decode(file_get_contents('https://coronavirus-tracker-api.herokuapp.com/v2/locations'));

usort($data->locations, function ($a, $b) {
    return $a->latest->confirmed < $b->latest->confirmed;
});

// dd($data);

function nice_number(string $num): string {
    return number_format((float) $num, 0, '.', ' ');
}