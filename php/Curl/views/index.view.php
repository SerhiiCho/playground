<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laptops</title>
</head>
<body>
    <p>
        <?php foreach ($images as $image): ?>
            <img src='<?=$image?>' alt='image' width="210" />
        <?php endforeach;?>
    </p>
</body>
</html>
