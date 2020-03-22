<?php

require_once 'connect.php';

$email = $_POST['email'];
$pwd = $_POST['password'];
$hash = password_hash($pwd, PASSWORD_DEFAULT);
$errors = [];

if (!isset($_POST['submit'])) {
    $errors[] = 'not_submitted';
}

if (strlen($email) < 4 || strlen($pwd) < 6) {
    $errors[] = 'email_and_password_less_then_6';
}

$stmt = $conn->prepare("SELECT email FROM users WHERE email = :email LIMIT 1;");
$stmt->execute(compact('email'));

if ($stmt->rowCount() > 0) {
    $errors[] = 'email_exists';
}

if (!empty($errors)) {
    header("Location: ../signup.php?msg={$errors[0]}");
    die;
}

$_SESSION['id'] = $user['id'];

$stmt = $conn->prepare("INSERT INTO users (email, pwd) VALUES (:email, :hash)");
$stmt->execute(compact('email', 'hash'));
header('Location: ../index.php?msg=success');
