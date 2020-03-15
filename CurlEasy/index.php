<?php

require_once __DIR__ . '/vendor/autoload.php';

use cURL\Request;

$request = new Request('http://localhost:9009');

while ($request->socketPerform());