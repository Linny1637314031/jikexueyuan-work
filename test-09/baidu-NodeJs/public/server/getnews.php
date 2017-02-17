<?php 
	// 设置响应的文件头部
	header("Content-type:application/json;charset=utf-8");

	//链接数据库
	require_once('db.php');
	// $link = mysqli_connect('localhost','root','','baidunews',3306);

	
	if($link){
		// 执行成功的过程
		if(is_array($_GET)&&count($_GET)>0){
			if(isset($_GET['newstype'])){
				$newstype = $_GET['newstype'];
				$sql = "SELECT * FROM news WHERE newstype='{$newstype}'";   //查询语句

				mysqli_query($link,"SET NAMES utf8");
				$result = mysqli_query($link,$sql);   //查询结果

				$senddata = array();
				//输出查询结果
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
			}else{
				$sql = "SELECT * FROM news";   //查询语句
				mysqli_query($link,"SET NAMES utf8");
				$result = mysqli_query($link,$sql);   //查询结果

				$senddata = array();
				//输出查询结果
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
			}
		}
	}else{
		echo json_encode(array('success'=>'none'));
	}

	mysqli_close($link);


?>