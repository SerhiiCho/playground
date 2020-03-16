<?php

declare(strict_types=1);

class User {
    public string $name;

    function __construct(string $name)
    {
        $this->name = $name;
    }

    public function getLettersFromName(string $letter): array
    {
        return array_filter(str_split($this->name), fn($item) => $item === $letter);
    }
}

$user = new User('Serhii');
$res = $user->getLettersFromName('i');

var_dump($res);