<?php

declare(strict_types=1);

class Name
{
    public function __construct(private string $name)
    {
        echo $name;
    }

    public function __toString(): string
    {
        return $this->name;
    }
}

class User
{
    public function __construct(public Stringable $name) {}
}

// Stringable and getting the name of the class
$user = new User(new Name('Anna'));
$class_name = $user::class;

echo $user->name;