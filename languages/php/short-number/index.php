<?php

declare(strict_types=1);

require_once 'vendor/autoload.php';

use Serhii\ShortNumber\Number;

echo Number::short(1893234) . "\n"; // output: "1m"
echo Number::short(20234); // output: "20k"
