<?php 
	include("../common/readmation.php");
	if($_POST["type"] == "top_up"){
		$update = "update user_information set money={$_POST['money']}+money where id={$_SESSION['user_id']}";
		if(mysql_query($update)){
			echo "充值成功";
		}else{
			die(mysql_error());
			echo "充值失败".mysql_error();
		}
	}
	// var_dump($_POST['money']);
 ?>