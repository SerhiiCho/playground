<?php

declare(strict_types=1);

namespace App\Builder\Models;

interface Model
{
    public function getId(): int;

    public function getBrand(): string;

    public function getModel(): string;

    public function getColor(): string;

    public function getDoors(): int;

    public function getScreenType(): string;

    public function getWeight(): float;

    public function getHeight(): float;
}