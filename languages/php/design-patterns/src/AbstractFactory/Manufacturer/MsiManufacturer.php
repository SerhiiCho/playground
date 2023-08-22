<?php

declare(strict_types=1);

namespace App\AbstractFactory\Manufacturer;

use App\AbstractFactory\Products\Gpu\Gpu;
use App\AbstractFactory\Products\Gpu\MsiGpu;
use App\AbstractFactory\Manufacturer\Company;
use App\AbstractFactory\Products\Monitor\Monitor;
use App\AbstractFactory\Products\Monitor\MsiMonitor;

class MsiManufacturer extends Company
{
    public function createGpu(): Gpu
    {
        return new MsiGpu();
    }

    public function createMonitor(): Monitor
    {
        return new MsiMonitor();
    }
}