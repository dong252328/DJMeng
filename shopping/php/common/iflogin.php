<?php 
	session_start();
	if(empty($_SESSION["username"])){
		echo "error";
	}else{
		echo "select";
	}
	
?>