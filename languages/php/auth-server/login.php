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

$stmt = $pdo->prepare("SELECT login, pass FROM server WHERE login = :login limit 1;");
$stmt->execute(compact('login'));
$user = $stmt->fetch();

echo $pass === $user->pass
    ? 'Вы успешно авторизованы'
    : 'Пользователь с такими данными не найден';