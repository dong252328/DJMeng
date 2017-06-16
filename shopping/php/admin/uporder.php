<?php 
	include("../common/readmation.php");
	if(@$_POST['type'] === "selectorder"){
		$select = "
			SELECT
				order_id,
				s. NAME AS shop_name,
				count,
				price,
				realname,
				address,
				phone,
				user_id,
				express
			FROM
				shop_order o
			LEFT JOIN user_information i ON o.user_id = i.id
			LEFT JOIN shop s ON o.shop_id = s.id
			WHERE
				order_id = '{$_POST['order_id']}'
		";
		$reg = mysql_query($select);
		$arr = mysql_fetch_assoc($reg);
		echo json_encode($arr);
	}
	if(@$_POST['type'] === "uporder"){
		$update = "
			UPDATE shop_order o
				LEFT JOIN user_information i ON o.user_id = i.id
				SET count = {$_POST['count']},
				 realname = '{$_POST['realname']}',
				 address = '{$_POST['address']}',
				 phone = {$_POST['phone']},
				 express = '{$_POST['express']}'
				WHERE
					order_id = '{$_POST ['order_id']}'
		";
		if(mysql_query($update)){
			echo "修改成功！！";
			header("refresh:2;url=../../html/admin/order.html");
		}
	}
	if(@$_POST['type'] === "readexpress"){
		$select = "SELECT id,name FROM `express`";
		$str = mysql_query($select);
		$arrs = [];
		while($arr = mysql_fetch_assoc($str)){
			$arrs[] = $arr;
		}
		echo json_encode($arrs);
	}
 ?>