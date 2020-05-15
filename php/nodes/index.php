<?php

require_once 'vendor/autoload.php';

use App\Tree;

$tree = new Tree();
$tree->add(1);
$tree->add(2);
$tree->add(3);
$tree->add(4);
$tree->add(5);
$tree->add(6);
$tree->add(7);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nodes tree</title>
    <link rel="stylesheet" href="assets/materialize.min.css">
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div class="container">
        <div class="nodes">
            <?php echo $tree->getTree(); ?>
        </div>
    </div>
    <script src="assets/main.js"></script>
</body>
</html>