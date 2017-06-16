<?php 
	if(!empty($_POST)){
		include("../../index.php");
		$insert = "insert into admin (
		username,password,realname
		) 
		values 
		(
		'{$_POST['username']}',
		'{$_POST['password']}',
		'{$_POST['realname']}'
		)";
		if(mysql_query($insert)){
			echo "注册成功";
			header("refresh:2;url='../../html/admin/login.html'");
			exit;
		}else{
			var_dump(mysql_error());
		}
	}
 ?>