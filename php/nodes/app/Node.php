<?php

declare(strict_types=1);

namespace App;

class Node
{
    public ?Node $left;
    public ?Node $right;
    public int $number;
    
    public function __construct(int $number, ?Node $left = null, ?Node $right = null)
    {
        $this->number = $number;
        $this->left = $left;
        $this->left = $right;
    }
}
