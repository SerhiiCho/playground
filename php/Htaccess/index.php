<?php

require_once 'inc/header.php';
require_once 'inc/connect.php';

$stmt = $conn->query("SELECT * FROM posts");
$posts = '';

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $posts .= '
        <div class="col-md-6 col-lg-4 col-xl-3">
            <a href="/post/' . $row['id'] . '">
                <div class="card mt-4">
                    <img class="card-img-top" src="' . $row['img'] . '" alt="Post image">
                </div>
            </a>
        </div>
    ';
}

require_once 'views/index.view.php';
require_once 'inc/footer.php';
