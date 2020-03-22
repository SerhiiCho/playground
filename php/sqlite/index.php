<?php

declare(strict_types=1);

use App\DB;

define('DB_NAME', 'fish.db');

require_once __DIR__ . '/functions.php';
require_once __DIR__ . '/vendor/autoload.php';

$result = (new DB)
    ->createTable()
    ->insertData()
    ->getAll();

header('Content-Type: application/json');

echo json_encode($result);