<?php 
	include("../common/readmation.php");
	if($_POST['type'] === "readorder"){
		echo redorder($_SESSION['user_id']);
	}
 ?>