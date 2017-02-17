<?php
	// 设置响应的文件头部
	header("Content-type:application/json;charset=utf-8");

	//链接数据库
	require_once('db.php');
	// $link = mysqli_connect('localhost','root','','baidunews',3306);


	if($link){
		//插入新闻
		$newstitle = $_POST['newstitle'];
		$newstype = $_POST['newstype'];
		$newsimg = $_POST['newsimg'];
		$newstime = $_POST['newstime'];
		$newssrc = $_POST['newssrc'];
		$newsid = $_POST['newsid'];


		//设置查询语句
		$sql = "UPDATE news SET newstitle='{$newstitle}',newstype='{$newstype}',newsimg='{$newsimg}',newstime='{$newstime}',newssrc='{$newssrc}' WHERE id={$newsid}";
		// $sql = "UPDATE news SET  (newstitle,newstype,newsimg,newstime,newssrc) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";


		mysqli_query($link,"SET NAMES utf8");  //解决乱码问题
		$result = mysqli_query($link,$sql);   //查询结果

		echo json_encode(array('success'=>'$sql'));
	}
	mysqli_close($link);
?>