<?php

declare(strict_types=1);

namespace App\AbstractFactory\Manufacturer;

use App\AbstractFactory\Products\Gpu\Gpu;
use App\AbstractFactory\Products\Monitor\Monitor;
use App\AbstractFactory\Products\Gpu\AsusGpu;
use App\AbstractFactory\Products\Monitor\AsusMonitor;

class AsusManufacturer extends Company
{
    public function createGpu(): Gpu
    {
        return new AsusGpu();
    }

    public function createMonitor(): Monitor
    {
        return new AsusMonitor();
    }
}