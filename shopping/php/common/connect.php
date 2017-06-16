<?php 
	// 加载数据库配置
	include(APP."/php/config/mysql.php");
	// 链接数据库
	// mysql_connect(mysql服务器主机，mysql用户名，mysql密码)
	if(@ !mysql_connect(HOST,USER,PASS)){
		die(mysql_error().'链接失败');
	}
	//选择数据库
	mysql_select_db(DB_NAME);
	//设置客户端编码
	mysql_set_charset("utf8")
 ?>