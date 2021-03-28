<?php

declare(strict_types=1);

use Symfony\Component\Yaml\Yaml;

require_once __DIR__ . '/vendor/autoload.php';

$yaml = file_get_contents('test.yml');

$res = Yaml::parse($yaml);

var_dump($res);