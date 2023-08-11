<?php

declare(strict_types=1);

// In PHP, the function empty returns true with the following values:
// "", null, 0, 0.00, false, []
var_dump(empty("0")); // bool(true)

$num = 0;

settype($num, 'string'); // sets the type

var_dump($num); // "0"

