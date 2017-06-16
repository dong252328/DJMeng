<?php 
	include("../../index.php");
	if(!empty($_POST)){
		$insert = "
			INSERT INTO express (
				NAME,
				tel,
				baseprice,
				addprice
			)
			VALUES
				(
					'{$_POST['name']}',
					'{$_POST['tel']}',
					'{$_POST['baseprice']}',
					'{$_POST['addprice']}'
				)
		";
		if(mysql_query($insert)){
			echo "添加成功！！！";
			header("refresh:2;url=../../html/admin/insertexp.html");
		}
	}
 ?>