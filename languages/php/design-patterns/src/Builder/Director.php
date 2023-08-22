<?php

declare(strict_types=1);

namespace App\Builder;

use App\Builder\Builder\Builder;
use App\Builder\Models\Model;

class Director
{
    public function buildBugatti(Builder $builder): Model
    {
        return $builder
            ->setId(1)
            ->setBrand('Bugatti')
            ->setModel('Chiron')
            ->setColor('Blue')
            ->setDoors(2)
            ->setScreenType('Touchscreen')
            ->setWeight(1970)
            ->setHeight(115)
            ->build();
    }

    public function buildLambo(Builder $builder): Model
    {
        return $builder
            ->setId(2)
            ->setBrand('Lamborghini')
            ->setModel('Aventador')
            ->setColor('Yellow')
            ->setDoors(2)
            ->setScreenType('Touchscreen')
            ->setWeight(1575)
            ->setHeight(115)
            ->build();
    }
}