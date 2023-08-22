<?php

declare(strict_types=1);

namespace App\AbstractFactory\Products\Gpu;

interface Gpu
{
    public function assemble(): void;
}