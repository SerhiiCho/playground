<?php

declare(strict_types=1);

namespace App\Builder;

use App\Builder\Builder\Builder;

class Director
{
    public function buildBugatti(Builder $builder): void
    {
        $builder
            ->setId(1)
            ->setBrand('Bugatti')
            ->setModel('Chiron')
            ->setColor('Blue')
            ->setDoors(2)
            ->setScreenType('Touchscreen')
            ->setWeight(1970)
            ->setHeight(115);
    }

    public function buildLambo(Builder $builder): void
    {
        $builder
            ->setId(2)
            ->setBrand('Lamborghini')
            ->setModel('Aventador')
            ->setColor('Yellow')
            ->setDoors(2)
            ->setScreenType('Touchscreen')
            ->setWeight(1575)
            ->setHeight(115);
    }
}