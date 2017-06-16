<?php 
	include("../common/readmation.php");
	if($_POST['type'] === "readorder"){
		$select = "SELECT
			order_id,
			count,
			date,
			express,
			mark,
			s. NAME AS shop_name,
			price,
			description,
			t. NAME AS type_name,
			imgpath,
			count * price AS sum,
			e. NAME AS kdname,
			realname
		FROM
			shop_order o
		LEFT JOIN shop s ON o.shop_id = s.id
		LEFT JOIN shop_type t ON type_id = t.id
		LEFT JOIN express e ON o.express = e.id
		LEFT JOIN user_information i ON o.user_id = i.id";
		$reg = mysql_query($select);
		$arrs=[];
		while($arr = mysql_fetch_assoc($reg)){
			$arrs[] = $arr;
		}
		echo json_encode($arrs);
	}
 ?>