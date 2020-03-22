<?php

session_start();

require_once 'connect.php';

$email = $_POST['email'];
$pwd = $_POST['password'];
$errors = [];

if (!isset($_POST['submit'])) {
    $errors[] = 'not_submitted';
}

if (strlen($email) < 4 || strlen($pwd) < 6) {
    $errors[] = 'email_and_password_less_then_6';
}

$stmt = $conn->prepare("select id, email, pwd from users where email = :email limit 1;");
$stmt->execute(compact('email'));
$user = $stmt->fetch();

if (!password_verify($pwd, $user->pwd)) {
    $errors[] = 'user_not_found';
}

if (!empty($errors)) {
    header("Location: ../login.php?msg={$errors[0]}");
    die;
}

$_SESSION['id'] = $user->id;

header('Location: ../index.php?msg=success');
