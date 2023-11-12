<?php

declare(strict_types=1);

class Init
{
    public function first(): ?self
    {
        return null;
    }

    public function second(): self
    {
        return $this;
    }

    public function third(): string
    {
        return 'hello';
    }
}

$init = new Init();
$result = $init->first()?->second()?->third();

var_dump($result);