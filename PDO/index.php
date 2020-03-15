<?php declare(strict_types=1);

$pdo = new PDO('mysql:host=localhost;dbname=pdo', 'serhii', '111111');
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

$stmp = $pdo->query('select * from users');

while ($row = $stmp->fetch()) {
    echo $row->is_pretty == 1
        ? "<span style='color:#ff5775'>{$row->name} (pretty)</span><br>"
        : "<span style='color:darkgreen'>{$row->name}<span><br>";
}
