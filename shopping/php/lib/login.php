<?php 
	if(empty($_POST)){
		header("location:../../register.html");
		exit;
	}
	include("../../index.php");
	session_start();
	$password = md5(md5("shop").$_POST['password']);
	$username = mysql_real_escape_string($_POST['username']);
	$select = "select count(*),id from user_account where username = '{$username}' and password = '{$password}'";
	$str = mysql_query($select);
	$arr = mysql_fetch_row($str);

	if($arr[0] ==1){
		echo "登录成功";
		$_SESSION["username"] = $_POST['username'];
		$_SESSION["user_id"] = $arr[1];
		header("refresh:2;url='../../html/shop.html'");
		exit;
	}else{
		echo "登录失败！用户名或密码错误！";
		header("refresh:2;url='../../html/login.html'");
		exit;
	}
 ?>