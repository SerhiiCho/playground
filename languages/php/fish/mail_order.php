<?php

function log_request($msg)
{
    $date = date('Y-m-d H:i:s');
    $file_name = 'app-logs/' . date('Y-m-d') . '.log';
    $file_name = __DIR__ . '/../app-logs/' . date('Y-m-d') . '.log';
    $content = "[$date] [Status: $msg] " . json_encode($_POST, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) . "\n";
    file_put_contents($file_name, $content, FILE_APPEND);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !isset($_POST['pass']) || $_POST['pass'] !== '55555') {
    http_response_code(400);
    log_request(400);
    exit;
}

function get_subject($msg)
{
    $regex = '/Комментарий<\/th><\/tr><tr><td style="padding: 5px;border:1px solid #999;">([A-zА-я ]+)<\/td><td style=/u';

    preg_match_all($regex, stripslashes($msg), $matches);

    if (isset($matches[1][0])) {
        return 'Приложение - ' . $matches[1][0];
    }

    return 'Новый заказ с приложения';
}

function send_mail($subject, $message)
{
    $email = 'office@aqua-m.com.ua';

    $headers  = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";

    $message = wordwrap($message, 70, "\r\n");

    mail($email, $subject, $message, $headers);
}

$subject = get_subject($_POST['message']);

if (isset($_POST['subject'])) {
    $subject = $_POST['subject'];
}

log_request(200);
send_mail($subject, $_POST['message']);

exit;
