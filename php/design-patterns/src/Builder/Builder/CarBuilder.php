<?php

declare(strict_types=1);

namespace App\Builder\Builder;

use App\Builder\Models\Car;

class CarBuilder
{
    private ?int $id;
    private ?string $brand;
    private ?string $model;
    private ?string $color;
    private ?int $doors;
    private ?string $screenType;
    private ?float $weight;
    private ?float $height;

    public function setId(int $id): self
    {
        $this->id = $id;
        return $this;
    }

    public function setBrand(string $brand): self
    {
        $this->brand = $brand;
        return $this;
    }

    public function setModel(string $model): self
    {
        $this->model = $model;
        return $this;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;
        return $this;
    }

    public function setDoors(int $doors): self
    {
        $this->doors = $doors;
        return $this;
    }

    public function setScreenType(string $screenType): self
    {
        $this->screenType = $screenType;
        return $this;
    }

    public function setWeight(float $weight): self
    {
        $this->weight = $weight;
        return $this;
    }

    public function setHeight(float $height): self
    {
        $this->height = $height;
        return $this;
    }

    public function build(): Car
    {
        return new Car(
            $this->id,
            $this->brand,
            $this->model,
            $this->color,
            $this->doors,
            $this->screenType,
            $this->weight,
            $this->height,
        );
    }
}