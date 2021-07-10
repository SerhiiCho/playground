<?php

require('vendor/autoload.php');

use Intervention\Image\ImageManager;

if (isset($_FILES['file'])) {
    function resizeImage(string $image_path): void {
        (new ImageManager(['driver' => 'imagick']))
            ->make($image_path)
	    ->trim('transparent', ['right', 'left', 'top', 'bottom'])
	    ->resize(720, null, fn($constraint) => $constraint->aspectRatio())
            ->save(sprintf('files/%s-up.jpg', time()));
    }

    resizeImage($_FILES['file']['tmp_name']);
    header('Location: /?msg=ok');
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h3>Image manipulation with PHP</h3>

                <form method="post" enctype="multipart/form-data" class="mt-3">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button type="submit" class="input-group-text bg-primary text-light">Upload</button>
                        </div>
                        <div class="custom-file">
                            <input type="file" name="file" class="custom-file-input" id="inputGroupFile01" required>
                            <label class="custom-file-label" for="inputGroupFile01">Choose an image</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>

</html>