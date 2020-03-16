<?php

require_once __DIR__ . '/vendor/autoload.php';

use Serhii\GoodbyeHtml\Parser;

$parser = new Parser('html.html', [
    'nice' => 'Hello world',
    'exist' => true,
]);

echo $parser->parseHtml();