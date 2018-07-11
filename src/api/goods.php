
<?php 
    //引用 php 文件
    include 'dbhelper.php';
    $id = !isset($_POST["idx"]) ? "" : $_POST["idx"];


    //判断当前注册的用户是否存在，如果存在则不能再次注册
    $sql = "select * from list where indexid = '$id'";
   
    $result = query_sql($sql);
    if(count($result) > 0){
        echo json_encode($result);
    }else{
        echo json_encode($result);
    }
    
    //
  
?>

