<?php

declare(strict_types=1);

namespace App\AbstractFactory\Products\Gpu;

class AsusGpu implements Gpu
{
    public function assemble(): void
    {
        echo "Assembling ASUS GPU...\n";
    }
}