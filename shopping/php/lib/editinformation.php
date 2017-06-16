<?php 
	if(empty($_POST)){
		die("请求失败");
	}
	include("../common/readmation.php");
	// var_dump($_POST);
	$update = "update user_information set realname='{$_POST['realname']}',phone='{$_POST['phone']}',email='{$_POST['email']}',sex='{$_POST['sex']}',address='{$_POST['address']}' where id = '{$_POST['id']}'";
	if(mysql_query($update)){
		echo "OK";
		header("refresh:2;url='../../html/person.html'");
	}else{
		mysql_error();
	}
 ?>