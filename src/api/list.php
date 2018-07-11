<?php 
    header('Content-type:text/html;charset=utf-8');

    $server = "localhost";
    $account = "root";
    $pwd = "root";
    $db = "laughing";

    $conn = new mysqli($server, $account, $pwd, $db);
    mysqli_query($conn,"set names utf8");
    if($conn->connect_error){
        echo "{status: false, message: '连接错误'}";
    } else {
        $sql = "select * from list";

        $result = $conn->query($sql);

        $dataset = array();

        while($row = $result->fetch_assoc()){
            $dataset[] = $row;
        }

        $result->free();
        $conn->close();

        $data = json_encode($dataset);
        // $boj = 
        echo $data;
    }
?>


