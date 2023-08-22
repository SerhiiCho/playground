<?php

declare(strict_types=1);

namespace App\Memento;

class TextArea
{
    private string $text;

    public function setText(string $text): void
    {
        $this->text = $text;
    }

    public function getText(): string
    {
        return $this->text;
    }

    public function takeSnapshot(): Memento
    {
        return new Memento($this->text);
    }

    public function restore(Memento $memento): void
    {
        $this->text = $memento->getText();
    }
}