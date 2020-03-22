<?php

require_once 'inc/header.php';
require_once 'inc/connect.php';

$id = $_GET['post'];
$stmt = $conn->prepare("SELECT * FROM posts WHERE id = :id LIMIT 1");
$stmt->execute(compact('id'));
$post = $stmt->fetch();

require_once 'views/post.view.php';
require_once 'inc/footer.php';
