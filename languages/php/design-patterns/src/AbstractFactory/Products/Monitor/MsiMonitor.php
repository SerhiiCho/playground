<?php

declare(strict_types=1);

namespace App\AbstractFactory\Products\Monitor;

class MsiMonitor implements Monitor
{
    public function assemble(): void
    {
        echo "Assembling MSI monitor...\n";
    }
}