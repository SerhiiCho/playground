<?php

declare(strict_types=1);

use DI\ContainerBuilder;

require_once __DIR__ . '/../vendor/autoload.php';

try {
    $builder = new ContainerBuilder();
    $builder->addDefinitions(__DIR__ . '/../config.php');
    $builder->build();
} catch (Exception $e) {
    // log the error and show some error page to a user
    exit($e->getMessage());
}