<?php 
	include("../common/readmation.php");
	if(@$_POST['type'] == "request_type"){
		$select = "select * from shop_type";
		$str = mysql_query($select);
		$arrs = array();
		while($arr = mysql_fetch_assoc($str)){
			$arrs[] = $arr;
		}
		echo json_encode($arrs);
	}
	// if(!empty($_POST)){
	// 	var_dump($_FILE);
	// }
 ?>