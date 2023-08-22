<?php

declare(strict_types=1);

#[Attribute]
class Route {
    public function __construct(public string $path)
    {
    }
}

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
$result = $reflection->getMethod('getName');
$attr = $result->getAttributes(Route::class, ReflectionAttribute::IS_INSTANCEOF)[0];
var_dump($attr->getTarget());