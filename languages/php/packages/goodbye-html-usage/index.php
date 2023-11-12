<?php

include_once __DIR__ . '/vendor/autoload.php';

use App\MainPage;

$mainPage = new MainPage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Goodbye HTML package usage</title>
</head>
<body style="max-width: 900px; margin: auto;">
    <h1>Below, we will print the output of Goodbye HTML package</h1>

    <div style="font-size: 1.2rem;">
        <?php echo $mainPage->getContent(); ?>
    </div>
</body>
</html>