<?php

class User
{
    public function __construct(public string $name, public bool $isAdmin)
    {
    }
}

function isAdmin(User $user): bool {
    return $user->isAdmin;
}

$users = [
    new User('serhii', isAdmin: true),
    new User('anna', isAdmin: false),
];

var_dump(array_filter($users, isAdmin(...)));
