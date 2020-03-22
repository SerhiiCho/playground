<?php

declare(strict_types=1);

function getAllFrom(string $table_name, SQLite3 $db_inst): array
{
    $smtp = $db_inst->prepare("SELECT * FROM {$table_name};");
    $result = $smtp->execute()->fetchArray(SQLITE3_ASSOC);

    return $result ? $result : [];
}

function createFishTable(SQLite3 $db_inst)
{
    $sql = "
        CREATE TABLE fish (
            id smallint UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name varchar(220),
            price decimal(10,2)
        );
    ";

    $db_inst->exec($sql);
}