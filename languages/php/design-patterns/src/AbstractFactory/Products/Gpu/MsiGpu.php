<?php

declare(strict_types=1);

namespace App\AbstractFactory\Products\Gpu;

class MsiGpu implements Gpu
{
    public function assemble(): void
    {
        echo "Assembling MSI GPU...\n";
    }
}