<?php

namespace PHP81;

require_once __DIR__ . '/../vendor/autoload.php';

// RFC: https://wiki.php.net/rfc/array_unpacking_string_keys

$girl = ['name' =>'Anna', 'age' => 28];
$habit = ['title' => 'sport', 'place' => 'gim'];

$result = [...$girl, ...$habit];

dd($result);
