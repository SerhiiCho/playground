<?php

require_once 'vendor/autoload.php';

use App\Node;
use App\Tree;

$tree = new Tree(
    new Node(1,
        new Node(34,
            new Node(32),
            new Node(10),
        ),
        new Node(22,
            new Node(16),
            new Node(47),
        )
    )
);
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