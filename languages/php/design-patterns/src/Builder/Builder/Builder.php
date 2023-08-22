<?php

declare(strict_types=1);

namespace App\Builder\Builder;

use App\Builder\Models\Model;

interface Builder
{
    public function setId(int $id): self;

    public function setBrand(string $brand): self;

    public function setModel(string $model): self;

    public function setColor(string $color): self;

    public function setDoors(int $doors): self;

    public function setScreenType(string $screenType): self;

    public function setWeight(float $weight): self;

    public function setHeight(float $height): self;

    public function build(): Model;
}
