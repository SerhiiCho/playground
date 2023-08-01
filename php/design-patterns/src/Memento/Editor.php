<?php

declare(strict_types=1);

namespace App\Memento;

class Editor
{
    /**
     * @var array<int, Memento>
     */
    private array $stateHistory;
    private TextArea $textArea;

    public function __construct()
    {
        $this->textArea = new TextArea();
        $this->stateHistory = [];
    }

    public function write(string $text): void
    {
        $this->textArea->setText($text);
        $this->stateHistory[] = $this->textArea->takeSnapshot();
    }

    public function undo(): void
    {
        array_pop($this->stateHistory);
        $this->textArea->restore(end($this->stateHistory));
    }

    public function getText(): string
    {
        return $this->textArea->getText();
    }
}