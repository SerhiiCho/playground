<?php

namespace App;

use SQLite3;

class DB
{
    private $db;

    public function __construct()
    {
        if (file_exists(DB_NAME)) {
            unlink(DB_NAME);
        }
        $this->db = new SQLite3(DB_NAME);
    }

    public function createTable()
    {
        createFishTable($this->db);
        return $this;
    }

    public function insertData()
    {
        $sql = "
            insert into fish (name, price)
            values (:name, :price);
        ";

        $smtp = $this->db->prepare($sql);
        $smtp->bindValue(':name', 'Gold fish', SQLITE3_TEXT);
        $smtp->bindValue(':price', 30.3, SQLITE3_FLOAT);
        $smtp->execute();

        return $this;
    }

    public function getAll(): array
    {
        return getAllFrom('fish', $this->db);
    }

    public function __destruct()
    {
        $this->db->close();
    }
}
