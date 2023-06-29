<?php

declare(strict_types=1);

namespace App\Builder\Models;

readonly class Car implements Model
{
    public function __construct(
        private int $id,
        private string $brand,
        private string $model,
        private string $color,
        private int $doors,
        private string $screenType,
        private float $weight,
        private float $height,
    ) {
    }
}
