<?php 
	include("../common/readmation.php");
	if($_POST['type'] =="request"){
		$select = "select s.id,s.name,price,description,t.name shop_type,imgpath,status from 
		shop s inner join shop_type t on s.type_id=t.id";
		$str = mysql_query($select);
		$arrs = array();
		while($arr = mysql_fetch_assoc($str)){
			$arrs[] = $arr;
		}
		echo json_encode($arrs);
		die;
	}
 ?>