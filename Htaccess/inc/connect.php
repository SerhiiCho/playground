<?php

error_reporting(1);

$dbhost = 'localhost';
$dbuser = 'serhii';
$dbpwd = '111111';
$dbname = 'htaccess';

# Data source name
$dsn = "mysql:host={$dbhost};dbname={$dbname}";

# Create PHP Data Object instance
$conn = new PDO($dsn, $dbuser, $dbpwd);

# You can add this attribute to make fetching assoc by default
$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

# You need this if you want to make LIMIT in sql dynamic, if not set this
# then limit is going to be 1 by default if you replace it with ?
$conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

// $smtp = $conn->prepare("CREATE TABLE posts(
//     id int(11) not null unsigned PRIMARY KEY AUTO_INCREMENT,
//     img text not null,
//     text text not null
// );");
// $smtp->execute();
