<?php

use Curl\Curl;

require_once 'app/bootstrap.php';

$regex = "!https://www.agacistore.com/dw/image/v2/AARD_PRD/on/demandware.static/-/Sites-agaci-products/default/[^\s]*?sw=442&amp;sh=664!";
$url = 'https://www.agacistore.com/clothes-skirts-mini-skirts/';

$curl = new Curl($url);
$curl->setopt(CURLOPT_RETURNTRANSFER, 1);
$curl->setopt(CURLOPT_HEADER, 0);

preg_match_all($regex, $curl->exec(), $matches);

$curl->close();
$images = array_values(array_unique($matches[0]));

require_once 'views/index.view.php';
