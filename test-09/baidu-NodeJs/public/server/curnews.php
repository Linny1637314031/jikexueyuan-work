<?php
	// 设置响应的文件头部
	header("Content-type:application/json;charset=utf-8");

	//链接数据库
	require_once('db.php');

	//判断是否连接成功，如果连不上则有报错内容返回
	if($link){
		$newsid = $_GET['newsid'];

		mysqli_query($link,"SET NAMES utf8");  //解决乱码问题
		$sql = "SELECT * FROM news WHERE id = {$newsid}";

		$result = mysqli_query($link,$sql);

		$senddata = array();
		while($row = mysqli_fetch_assoc($result)){
			array_push($senddata,array(
					'id'=>$row['id'],
					'newstype'=>$row['newstype'],
					'newstitle'=>$row['newstitle'],
					'newsimg'=>$row['newsimg'],
					'newstime'=>$row['newstime'],
					'newssrc'=>$row['newssrc']
				));
		}
		echo json_encode($senddata);

		// echo json_encode(array('删除状态'=>'成功'));
	}

	mysqli_close($link);



?>