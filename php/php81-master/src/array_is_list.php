<?php

namespace PHP81;

require_once __DIR__ . '/../vendor/autoload.php';

// RFC: https://wiki.php.net/rfc/is_list

$result = array_is_list(['a', 'b']);

dd($result);
