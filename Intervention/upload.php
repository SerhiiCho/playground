<?php

require('vendor/autoload.php');

use Intervention\Image\ImageManager;

if (isset($_FILES['file'])) {
    function resizeImage(string $image_path): void {
        (new ImageManager(['driver' => 'imagick']))
            ->make($image_path)
            ->fit(200, 200, fn($constraint) => $constraint->upsize())
            ->save(sprintf('./files/%s-up.jpg', time()));
    }

    resizeImage($_FILES['file']['tmp_name']);
    header('Location: /?msg=ok');
} else {
    header('Location: /?msg=empty');
}

