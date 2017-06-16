<?php 
	include("../../index.php");
	session_start();
	if($_POST['type'] === "shop_car"){

		$select = "select count,name,price,description,imgpath,c.id as sc_id from shop s left join shop_car c on s.id=c.shop_id where c.user_id={$_SESSION['user_id']}";
		$reg = mysql_query($select);
		$arrs = [];
		while($arr = mysql_fetch_assoc($reg)){
			$arrs[] = $arr;
		}
		echo json_encode($arrs);
		die;
	}
	if($_POST['type'] === "upcount"){
		$update = "update shop_car set count={$_POST['count']} where id={$_POST['sc_id']}";
		if(mysql_query($update)){
			echo "666";
		}else{
			echo mysql_error();
		}
		die;
	}
	if($_POST['type'] === "pay_shop"){
		$sc_id = json_decode($_POST['id']);
		//读取购物车及总价
		$select = "select shop_id,user_id,count,price from shop_car c left join shop s on c.shop_id=s.id where c.id in (";
		$select1 = "select sum(count*price) as num from shop_car c left join shop s on c.shop_id=s.id where c.id in (";
		foreach($sc_id as $k=>$v){
			$select = $select.$v.",";
			$select1 .= $v.",";
		}
		$select = rtrim($select,",").")";
		$select1 = rtrim($select1,",").")";
		$reg = mysql_query($select);
		$reg1 = mysql_query($select1);
		$num = mysql_fetch_row($reg1);
		$arrs = [];
		while($arr = mysql_fetch_assoc($reg)){
			$arrs[] = $arr;
		}
		//判断
		$money = mysql_query("select money from user_information where id={$_SESSION['user_id']}");
		$user_money = implode(mysql_fetch_row($money));
		$i = $user_money-$num[0];
		if($i >= 0){
			$update = "update user_information set money={$i} where id={$_SESSION['user_id']}";
			mysql_query($update);
		}else{
			die("error");
		}

		//删除购物车
		$delete = "delete from shop_car where id in (";
		foreach($sc_id as $v){
			$delete .= $v.",";
		}
		$delete = rtrim($delete,",").")";
		mysql_query($delete);


		//生成订单
		$insert = "insert into shop_order (order_id,shop_id,user_id,count,date) values (";
		foreach($arrs as $k=>$v){
			$order_id = time().uniqid();
			$insert .= "'{$order_id}'".",".$v['shop_id'].",".$v['user_id'].",".$v['count'].",".time()."),(";
		}
		$insert = rtrim($insert,",(");
		if(mysql_query($insert)){
			die("ok");
		}
	}
		

	
	if($_POST['type'] === "delete_car"){
		$sc_id = json_decode($_POST['id']);
		$delete = "delete from shop_car where id in (";
		foreach($sc_id as $v){
			$delete .= $v.",";
		}
		$delete = rtrim($delete,",").")";
		if(mysql_query($delete)){
			die("ok");
		}
	}
 ?>