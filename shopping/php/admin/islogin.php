<?php 
	if($_POST['type'] === "islogin"){
		session_start();
		if(!empty($_SESSION['id'])){
			die('ok');
		}else{
			die("no");
		}
	}
 ?>