<?php

require_once 'dbh.inc.php';

$login = $_POST['login'] ?? null;
$pass = $_POST['pass'] ?? null;

if (!$login && !$pass) {
    echo 'Нужен логин и пароль';
    exit;
}

if (empty($login) || empty($pass)) {
    echo 'Пароль и логин не должны быть пустые';
    exit;
}

$stmt = $pdo->prepare("INSERT INTO server (login, pass) VALUES (:login, :pass)");

$stmt->execute([
    'login' => htmlspecialchars($login),
    'pass' => htmlspecialchars($pass),
]);

echo "Пользователь с логином {$login} зарегистрирован!";
