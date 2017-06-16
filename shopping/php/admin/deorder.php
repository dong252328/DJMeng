<?php 
	include("../../index.php");
	if(!empty($_GET['order_id'])){
		$delete = "DELETE
			FROM
				shop_order
			WHERE
				order_id = '{$_GET['order_id']}'";
		if(mysql_query($delete)){
			echo "订单删除成功！！";
			header("refresh:2;url=../../html/admin/order.html");
		}
	}
 ?>