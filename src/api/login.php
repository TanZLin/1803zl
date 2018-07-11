
<?php 
    //引用 php 文件
    include 'dbhelper.php';

    $username = !isset($_POST["username"]) ? "" : $_POST["username"];
    $pwd = !isset($_POST["pwd"]) ? "" : $_POST["pwd"];
    $age = !isset($_POST["age"]) ? "" : $_POST["age"];
    $gender = !isset($_POST["gender"]) ? "" : $_POST["gender"];
    $address = !isset($_POST["address"]) ? "" : $_POST["address"];


    //判断当前注册的用户是否存在，如果存在则不能再次注册
    $sql = "select * from users where username = '$username' and password = '$pwd'";
    $result = query_sql($sql);
    if(count($result) > 0){
        echo json_encode($result);
    }else{
        echo json_encode($result);
    }
    
    //
  
?>