<?php

    include_once 'db.php';

    $conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    };

    $conn->set_charset("utf8mb4");

?>