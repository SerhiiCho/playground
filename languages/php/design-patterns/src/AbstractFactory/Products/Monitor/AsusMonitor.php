<?php

declare(strict_types=1);

namespace App\AbstractFactory\Products\Monitor;

class AsusMonitor implements Monitor
{
    public function assemble(): void
    {
        echo "Assembling Asus monitor...\n";
    }
}