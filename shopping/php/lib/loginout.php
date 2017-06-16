<?php 
	session_start();
	$_SESSION = array();
	session_destroy();
	echo "退出成功";
	header("refresh:2;url=../../html/login.html");
 ?>