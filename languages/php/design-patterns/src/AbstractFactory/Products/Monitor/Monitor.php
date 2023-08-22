<?php

declare(strict_types=1);

namespace App\AbstractFactory\Products\Monitor;

interface Monitor
{
    public function assemble(): void;
}