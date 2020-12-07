<?php

declare(strict_types=1);

namespace App;

use const App\TEST;

class Nice
{
    public function __construct()
    {
        var_dump(\App\TEST);
    }
}