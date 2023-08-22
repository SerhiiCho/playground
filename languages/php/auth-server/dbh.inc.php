<?php

$config = require_once 'config.php';

$pdo = new PDO(
    "mysql:host={$config['host']};dbname={$config['db_name']}",
    $config['user'],
    $config['pass']
);

$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
