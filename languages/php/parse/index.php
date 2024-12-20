<?php

require_once __DIR__ . '/vendor/autoload.php';

use Serhii\GoodbyeHtml\Parser;

$parser = new Parser('html.html', [
    'nice' => 'Hello world',
    'exist' => true,
    'show_title' => true,
    'footer' => '<footer>This is the footer</footer>',
    'show_footer' => true,
    'show_nav' => false,
]);

echo $parser->parseHtml();
