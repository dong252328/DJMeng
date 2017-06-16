<?php 
	include("../../index.php");
	$id = '';
	if($_POST['type'] === "uppass"){
		global $id;
		$select = "
		SELECT
				a.id as id,count(*) as count
			FROM
				user_account a
			INNER JOIN user_information i ON a.id = i.id
			WHERE
			username = '{$_POST['username']}'
			AND phone = {$_POST['phone']}
		";
		$reg = mysql_query($select);
		$arr = mysql_fetch_assoc($reg);
		if($arr['count'] == 1){
			header("location:../../html/uppass.html?id=".$arr['id']);
		}
	}
	if($_POST['type'] === "password"){
		$password = md5(md5("shop").$_POST['password1']);
		$update = "
			UPDATE user_account
			SET `password` = '{$password}'
			WHERE
			id = {$_POST['id']}
		";
		if(mysql_query($update)){
			echo "密码修改成功!!";
			header("refresh:2;url=../../html/login.html");
		}
	}
 ?>