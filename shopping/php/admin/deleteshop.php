<?php 
	include("../common/readmation.php");
	if(!empty($_GET['id'])){
		$update = "delete from shop where id={$_GET['id']}";
		if(mysql_query($update)){
			echo "删除成功";
			header("refresh:2;url=../../html/admin/shopment.html");
			die;
		}else{
			echo "删除失败！ 原因：".mysql_error();
			die;
		}
	}
 ?>