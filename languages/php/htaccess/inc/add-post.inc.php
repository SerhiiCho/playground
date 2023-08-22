<?php

require_once 'connect.php';

$img = $_POST['img'];
$text = $_POST['text'];
$msg = [];

if (!isset($_POST['submit'])) {
    $msg[] = 'not_submitted';
}

if (strlen($text) < 5 || strlen($img) < 5) {
    $msg[] = 'text_or_image_less_then_5';
}

if (count($msg) > 0) {
    header("Location: ../posts.php?msg={$msg}");
    die;
}

$stmt = $conn->prepare("INSERT INTO posts (text, img) VALUES (:text, :img)");
$stmt->execute(compact('text', 'img'));

header('Location: ../posts.php?msg=success');
