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

    public function getId(): int
    {
        return $this->id;
    }

    public function getBrand(): string
    {
        return $this->brand;
    }

    public function getModel(): string
    {
        return $this->model;
    }

    public function getColor(): string
    {
        return $this->color;
    }

    public function getDoors(): int
    {
        return $this->doors;
    }

    public function getScreenType(): string
    {
        return $this->screenType;
    }

    public function getWeight(): float
    {
        return $this->weight;
    }

    public function getHeight(): float
    {
        return $this->height;
    }
}
