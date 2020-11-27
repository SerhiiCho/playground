<?php

declare(strict_types=1);

#[Attribute]
class Route {}

class User
{
    public function __construct(private string $name) {}

    #[Route('/home')]
    public function getName(): string
    {
        return $this->name;
    }
}

$reflection = new ReflectionClass(User::class);
var_dump($reflection->getAttributes(Route::class, ReflectionAttribute::IS_INSTANCEOF));