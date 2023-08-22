<?php

declare(strict_types=1);

$img = base64_encode(file_get_contents('img.png'));

file_put_contents('decoded.png', base64_decode($img));