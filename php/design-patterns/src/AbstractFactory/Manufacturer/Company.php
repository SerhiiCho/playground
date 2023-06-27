<?php

declare(strict_types=1);

namespace App\AbstractFactory\Manufacturer;

use App\AbstractFactory\Products\Gpu\Gpu;
use App\AbstractFactory\Products\Monitor\Monitor;

abstract class Company
{
    public abstract function createGpu(): Gpu;

    public abstract function createMonitor(): Monitor;
}