<?php 
	include("../common/readmation.php");
	if(@$_POST['type'] === "readshop"){
		echo readpage($_POST['id']);
		die;
	}
	if(@$_GET['type'] === "addshop"){
		$insert = "insert into shop_car (shop_id,user_id,count) values ({$_GET['shop_id']},{$_SESSION['user_id']},{$_GET['count']})";
		if(mysql_query($insert)){
			echo "666";
		}
		die;
	}
 ?>