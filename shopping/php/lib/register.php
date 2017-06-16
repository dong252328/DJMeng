<?php 
	if(empty($_POST)){
		header("location:../../register.html");
		exit;
	}
	include("../../index.php");
	$password = md5(md5("shop").$_POST['password']);
	$insert1 = "insert into user_account (username,password) values ('{$_POST['username']}','{$password}')";
	$insert2 = "insert into user_information (phone,email) values ('{$_POST['phone']}','{$_POST['email']}')";
	if(mysql_query($insert1) && mysql_query($insert2)){
		echo "注册成功";
		header("refresh:2;url='../../html/login.html'");
		exit;
	}
 ?>