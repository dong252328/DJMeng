<?php 
	include("../common/readmation.php");
	if(@$_POST['type'] == "requestAll"){
		$select = "select * from shop where id = {$_POST['id']}";
		$str = mysql_query($select);
		$arr = mysql_fetch_assoc($str);
		echo json_encode($arr);
		exit;
	}
	if(!empty($_POST['id'])){
		
		$update = "update shop set name ='{$_POST['name']}',price ='{$_POST['price']}',description ='{$_POST['description']}',type_id ='{$_POST['type_id']}',status = {$_POST['status']} ";
		if($_FILES['image']['name'] != ''){
			$xlj = fileimg($_FILES);
			$update .= ",imgpath ='{$xlj}'";
		}
		$update .= "where id={$_POST['id']}";
		if(mysql_query($update)){
			echo "商品修改成功";
			header("refresh:2;url=../../html/admin/shopment.html");
		}else{
			echo "商品修改失败! 失败原因:".mysql_error();
		}
		die;
	}
 ?>