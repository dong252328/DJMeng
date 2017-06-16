<?php 
	if(!empty($_POST)){
		include("../../index.php");
		$username = mysql_real_escape_string($_POST['username']);
		$password = mysql_real_escape_string($_POST['password']);
		$select = "select * from admin where username='{$username}' and password='{$password}'";
		$str = mysql_query($select);
		$arr = mysql_fetch_assoc($str);
		if($arr['username'] === $_POST['username'] && $arr['password'] === $_POST['password']){
			echo "登录成功";
			session_start();
			$_SESSION['id'] =$arr['id'];
			header("refresh:2;url='../../html/admin/shopment.html'");
			exit;
		}else{
			echo "登录失败！用户名或密码错误！";
			header("refresh:2;url='../../html/admin/login.html'");
			exit;
		}
	}
 ?>