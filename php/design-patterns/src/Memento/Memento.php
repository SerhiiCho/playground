<?php

declare(strict_types=1);

namespace App\Memento;

class Memento
{
    private readonly string $text;

    public function __construct(string $text)
    {
        $this->text = $text;
    }

    public function getText(): string
    {
        return $this->text;
    }
}