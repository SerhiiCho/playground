<?php

declare(strict_types=1);

use Serhii\Ago\TimeAgo;

require_once 'vendor/autoload.php';

$toNewYear = strtotime('midnight 1 January next year');
$output = TimeAgo::trans($toNewYear);

echo $output; // Outputs time left to New Year