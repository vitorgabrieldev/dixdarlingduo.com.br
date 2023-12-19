<?php

    include_once('../../models/conn.php');

    $data = json_decode($_POST['data']);

    $datas = mysqli_real_escape_string($conn, $data);

    $query = "SELECT * FROM access_codes WHERE codigo = '$datas'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        echo 1;
    } else {
        echo 0;
    }

    $conn->close();

?>