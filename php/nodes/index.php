<?php

require_once 'vendor/autoload.php';

use App\Node;

$node = [
    new Node(1, [
        new Node(2, [
            new Node(4),
            new Node(5),
        ]),
        new Node(3, [
            new Node(6),
            new Node(7),
        ])
    ]),
];

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
            <div class="node">
                <span><b>1</b></span>

                <div class="children">
                    <div class="node">
                        <span><b>2</b></span>

                        <div class="children">
                            <div class="node">
                                <span><b>4</b></span>
                            </div>
                            <div class="node">
                                <span><b>5</b></span>
                            </div>
                        </div>
                    </div>
                    <div class="node">
                        <span><b>2</b></span>

                        <div class="children">
                            <div class="node">
                                <span><b>4</b></span>
                            </div>
                            <div class="node">
                                <span><b>5</b></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/main.js"></script>
</body>
</html>