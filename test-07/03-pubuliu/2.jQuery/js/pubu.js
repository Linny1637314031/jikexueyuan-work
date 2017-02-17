//瀑布流功能
waterfall();

//后台数据
var dataInt = {"data" : [{"src" : '0.jpg'},{"src" : '1.jpg'},{"src" : '2.jpg'},{"src" : '3.jpg'},{"src" : '4.jpg'}]};

//图片加载功能
$(window).on('scroll',function(){
	if(checkScrollSlide){
		$.each(dataInt.data,function(key,value){
			// console.log(value);
			var oBox = $('<div>').addClass('box').appendTo($('#main'));
			var oPic = $('<div>').addClass('pic').appendTo($(oBox));
			$('<img>').attr('src','images/' + $(value).attr('src')).appendTo($(oPic));
			// console.log($(value).attr('src'));
		});
		waterfall();
	}
});

// 封装一个函数，调整图片的位置
function waterfall(){
	var $boxs = $('#main>div');
	// 计算每一列的宽度
	var w = $boxs.eq(0).outerWidth();
	// console.log(w);
	// 获取列数
	var cols = Math.floor( $(window).width() / w );
	// console.log(cols);

	//设置main的宽度并居中
	$('#main').width(w*cols).css("margin","0 auto");

	var hArr = [];
	$boxs.each(function(index,value){
		// console.log(index);
		var h = $boxs.eq(index).outerHeight();
		if(index<cols){
			hArr[index] = h;
		}else{
			var minH = Math.min.apply(null,hArr);
			// 获取索引
			var minHIndex = $.inArray(minH,hArr);
			// console.log(value);
			// 开始设置第二行的图片位置
			$(value).css({
				'position':'absolute',
				'top':minH + 'px',
				'left':minHIndex*w + 'px'
			});
			//改变每一列的高度
			hArr[minHIndex] += $boxs.eq(index).outerHeight();
		}
	});
	// console.log(hArr);
}


//封装一个函数，检测图片是否具有加载的条件
function checkScrollSlide(){
	var $lastBox = $('#main>div').last();
	var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight()/2);
	//滚动条滚动的距离
	var scrollTop = $(window).scrollTop();
	//浏览器窗口可视区域的高度
	var documentH = $(window).height();
	return (lastBoxDis<scrollTop + documentH) ? true:false;
}