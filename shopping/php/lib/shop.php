<?php 
	include("../common/readmation.php");
	if($_POST["type"] === "infor"){
		$arr = readmat($_SESSION['username']);
		echo json_encode($arr);
	}
	if($_POST["type"] === "readshop"){
		echo readshop($_POST["sum"]);
	}
	if($_POST["type"] === "paging"){
		$select = "select count(id) from shop where status=1";
		$reg = mysql_query($select);
		$arr = mysql_fetch_row($reg);
		echo ceil($arr[0]/PER_SUM);
	}

 ?>