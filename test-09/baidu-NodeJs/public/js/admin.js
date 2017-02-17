//打开后台页面的时候，发送请求，刷新新闻列表
$(document).ready(function(){
	var $newsTable = $("#newstable tbody");
	refreshNews();


	//添加新闻
	$('#btnsubmit').click(function(e){
		e.preventDefault();  //防止链接打开 URL：
		// preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）。

		//输入判断
		if($('#newstitle').val()==="" || $('#newsimg').val()==="" || $('#newstime').val()==="" || $('#newssrc').val()===""){
			if($('#newstitle').val()===""){
				$('#newstitle').parent().addClass('has-error');
			}else{
				$('#newstitle').parent().removeClass('has-error');
			}
			if($('#newsimg').val()===""){
				$('#newsimg').parent().addClass('has-error');
			}else{
				$('#newsimg').parent().removeClass('has-error');
			}
			if($('#newstime').val()===""){
				$('#newstime').parent().addClass('has-error');
			}else{
				$('#newstime').parent().removeClass('has-error');
			}
			if($('#newssrc').val()===""){
				$('#newssrc').parent().addClass('has-error');
			}else{
				$('#newssrc').parent().removeClass('has-error');
			}
		}else{
			var jsonNews = {
				newstitle:$('#newstitle').val(),
				newstype:$('#newstype').val(),
				newsimg:$('#newsimg').val(),
				newstime:$('#newstime').val(),
				newssrc:$('#newssrc').val()
			};


			//提交添加
			$.ajax({
				url:'/admin/insert',
				type:'post',
				data:jsonNews,
				datatype:'json',
				success:function(data){
					console.log(data);
					refreshNews();
				}
			});
		}
	});


	//添加和删除绑定事件
	//删除新闻的功能
	var deleteId = null;
	$newsTable.on('click','.btn-danger',function(e){
		// console.log('click');   测试是否可以使用
		$("#deleteModal").modal('show');
		console.log(deleteId = $(this).parent().prevAll().eq(5).html());
	});
	$("#deleteModal #confirmDelete").click(function(e){
		if(deleteId){
			$.ajax({
				url:'/admin/delete',
				type:'post',
				data:{newsid:deleteId},
				success:function(data){
					console.log('删除成功');
					$("#deleteModal").modal('hide');
					refreshNews();
				}
				/*
				error:function (a,b,c) {
					alert(a);
                    alert(b);
                    alert(c);
                }*/
			});
		}
	});


	//修改新闻功能
	var updateId = null;
	$newsTable.on('click','.btn-primary',function(e){
		// console.log('click');   测试是否可以使用
		$("#updateModal").modal('show');
		updateId = $(this).parent().prevAll().eq(5).html();
		console.log(updateId);
		$.ajax({
			url:'/admin/curnews',
			type:'get',
			datatype:'json',
			data:{newsid:updateId},
			success:function(data){
				console.log(data);
				$('#unewstitle').val(data[0].newstitle);
				$('#unewstype').val(data[0].newstype);
				$('#unewsimg').val(data[0].newsimg);
				$('#unewssrc').val(data[0].newssrc);
				var utime = data[0].newstime.split('T')[0];
				// console.log(utime);
				$('#unewtime').val(utime);
			}
		});
	});
	$("#updateModal #confirmUpdate").click(function(e){

		$.ajax({
			url:'/admin/update',
			type:'post',
			data:{
				newstitle:$('#unewstitle').val(),
				newstype:$('#unewstype').val(),
				newsimg:$('#unewsimg').val(),
				newstime:$('#unewstime').val(),
				newssrc:$('#unewssrc').val(),
				newsid:updateId
			},
			success:function(data){
				// alert("怎么回事？？？？");
				console.log(1);
				$("#updateModal").modal('hide');
				refreshNews();
			}
		});
	});
	



	


	function refreshNews(){
		// empty table
		$newsTable.empty();
		$.ajax({
			type:'get',
			url:'/admin/getnews',
			datatype:'json',
			success:function(data){
				console.log(data);
				data.forEach(function(item,index,array){
					var $tdid = $('<td>').html(item.id);
					var $tdtype = $('<td>').html(item.newstype);
					var $tdtitle = $('<td>').html(item.newstitle);
					var $tdimg = $('<td>').html(item.newsimg);
					var $tdsrc = $('<td>').html(item.newssrc);
					var $tdtime = $('<td>').html(item.newstime);
					var $tdctrl = $('<td>');
					var $btnupdata = $('<button>').addClass('btn btn-primary btn-xs').html('编辑');
					var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
					$tdctrl.append($btnupdata,$btndelete);
					var $tRow = $('<tr>');
					$tRow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdsrc,$tdtime,$tdctrl);
					$newsTable.append($tRow);
				});
			}
		});
	}
});



