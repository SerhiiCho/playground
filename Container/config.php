<?php

declare(strict_types=1);

use Zend\Diactoros\Response;
use Zend\Diactoros\ServerRequestFactory;

return [
    'request'=> fn() => ServerRequestFactory::fromGlobals(
        $_SERVER, $_GET, $_POST, $_COOKIE, $_FILES
    ),

    'response' => new Response(),
];
