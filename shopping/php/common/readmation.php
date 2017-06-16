<?php 
	session_start();
	include("../../index.php");
	/**
	 * 读取个人信息
	 */
	function readmat($username){
		$select = "select a.username,i.* from 
		user_account a inner join user_information i on a.id = i.id
		where a.username = '{$username}'
		";
		$reg = mysql_query($select);
		return $arr = mysql_fetch_assoc($reg);
		die;
	}
	/**
	 * 上传图片
	 */
	function fileimg($filse){
		$arr = array(
			"image/png",
			"image/jpeg",
			"image/gif"
		);
		// 上传图片
		if(!in_array($filse['image']['type'],$arr)){
			die;
		}
		if($filse['image']['error'] !== 0){
			die;
		}
		if($filse['image']['size'] > 1000*1024){
			die;
		}
		$tmp = $filse['image']['tmp_name'];
		$sjname = uniqid();
		$hz = strrchr($filse['image']['name'],'.');
		$lj = "../../img/".$sjname.$hz;
		move_uploaded_file($tmp,$lj);
		return $xlj = "/shopping/img/".$sjname.$hz;
	}
	/**
	 * 读取全部商品信息
	 */
	function readshop($page){
		$select = "select * from shop where status=1 limit ".($page-1)*PER_SUM.",".PER_SUM;
		$str = mysql_query($select);
		$arrs = [];
		while($arr = mysql_fetch_assoc($str)){
			$arrs[] = $arr;
		}
		return json_encode($arrs);
	}
	/**
	 * 读取单个商品信息
	 */
	function readpage($id){
		$reg = mysql_query("select * from shop where id={$id}");
		$arr = mysql_fetch_assoc($reg);
		return json_encode($arr);
	}
	/**
	 * 读取订单信息
	 */
	function redorder($user_id){
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
			count * price AS sum
		FROM
			shop_order o
		LEFT JOIN shop s ON o.shop_id = s.id
		LEFT JOIN shop_type t ON type_id = t.id
		WHERE
			o.user_id = {$user_id}";
		$reg = mysql_query($select);
		$arrs=[];
		while($arr = mysql_fetch_assoc($reg)){
			$arrs[] = $arr;
		}
		return json_encode($arrs);	
	}
 ?>