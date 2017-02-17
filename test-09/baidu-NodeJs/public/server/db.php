<?php
	header("Content-type:application/json;charset=utf-8");

	//链接数据库
	//参数：链接地址、用户名、密码、数据库名、链接端口
	$link = mysqli_connect('localhost','root','','baidunews',3306);


?>