<?php


$people = collect([
    'anna' => 26,
    'serhii' => 32,
]);


$result = $people->every(
    fn($age, $name) => is_string($name)
);
























