<?php

declare(strict_types=1);

namespace App;

class Node
{
    public ?array $children;
    public int $number;
    
    public function __construct(int $number, ?array $children = null)
    {
        $this->number = $number;
        $this->children = $children;
    }

    public function hasChildren(): bool
    {
        foreach ($this->children as $item) {
            if (is_array($item)) {
                return true;
            }
        }

        return false;
    }

    public function getChildren(): array
    {
        if (!$this->hasChildren()) {
            return null;
        }

        return array_filter($this->children, 'is_array');
    }

    public function drawNode(int $node_index): string
    {
        #

        return '';
    }
}
