<?php 
	include("../common/readmation.php");
	if(!empty($_POST)){
		$xlj = fileimg($_FILES);
		// 将数据保存到数据库
		$insert = "insert into shop (name,price,description,type_id,imgpath) values ('{$_POST['name']}',{$_POST['price']},'{$_POST['description']}',{$_POST['type_id']},'{$xlj}')";
		if(mysql_query($insert)){
			echo "商品上架成功";
			header("refresh:2;url=../../html/admin/shopment.html");
		}else{
			echo "商品上架失败! 失败原因:".mysql_error();
		}
	}
 ?>