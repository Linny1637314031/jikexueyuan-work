<?php
	// 设置响应的文件头部
	header("Content-type:application/json;charset=utf-8");

	//链接数据库
	require_once('db.php');

	//判断是否连接成功，如果连不上则有报错内容返回
	if($link){
		$newsid = $_POST['newsid'];

		mysqli_query($link,"SET NAMES utf8");  //解决乱码问题
		$sql = "DELETE FROM news WHERE id = {$newsid}";

		mysqli_query($link,$sql);

		echo json_encode(array('删除状态'=>'成功'));
	}

	mysqli_close($link);



?>