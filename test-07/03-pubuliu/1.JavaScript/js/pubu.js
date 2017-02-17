// 瀑布流功能
waterfall('main','box');

//后台数据
var dataInt = {"data" : [{"src" : '0.jpg'},{"src" : '1.jpg'},{"src" : '2.jpg'},{"src" : '3.jpg'},{"src" : '4.jpg'}]};

//图片加载功能
window.onscroll=function(){
	//判断是否具有加载的条件
	if(checkScrollSlide){
		var oParent = document.getElementById('main');
		for(var i=0; i < dataInt.data.length; i++){
			var oBox = document.createElement('div');
			oBox.className = 'box';
			oParent.appendChild(oBox);
			var oPic = document.createElement('div');
			oPic.className = 'pic';
			oBox.appendChild(oPic);
			var oImg = document.createElement('img');
			oImg.src = "images/" + dataInt.data[i].src;
			oPic.appendChild(oImg);
		}
		waterfall('main','box');
	}
}

// 封装一个函数，调整图片的位置
function waterfall(parent,box){
	// 获取父级元素
	var oParent = document.getElementById(parent);
	//获取box元素
	var oBoxs = getByClass(oParent,box);
	// console.log(oBoxs.length);
	

	
	//计算整个页面显示的列数（页面的宽 / box的宽）
	
	//获取box的宽
	var oBoxW = oBoxs[0].offsetWidth;
	// console.log(oBoxW);
	//获取页面宽度
	var pageW = document.documentElement.clientWidth;
	// console.log(pageW);
	
	//通过计算得出整个页面的列数
	var cols = Math.floor( pageW / oBoxW );
	// console.log(cols);



	//设置main的宽度和居中
	oParent.style.cssText = 'width:'+oBoxW * cols+'px;margin:0 auto';
	


	//图片排序：第一行通过float已经实现了定位，第二行的第一个图片定位到第一行高度最小的下面，so，首先要计算第一行高度最小的图片是多少，so，left=图片高度最小的图片，到最左边的距离
	
	//定义一个数组，储存每一列高度
	var hArr = [];
	//遍历每一个盒子
	for(var i=0; i<oBoxs.length; i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			// 获取最矮的图片
			var minH = Math.min.apply(null,hArr);
			// console.log(minH);
			
			//获取索引
			var index = getMinhIndex(hArr,minH);
			// console.log(index);
			// 改变盒子的位置
			oBoxs[i].style.position = 'absolute';
			oBoxs[i].style.top = minH + 'px';
			// oBoxs[i].style.left = oBoxW * index + 'px';
			oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';

			//改变数组
			hArr[index] += oBoxs[i].offsetHeight;
		}
	}
	// console.log(hArr);
}

//封装，根据class获取元素
function getByClass(parent,clsName){
	//定义一个数组，储存class名为box的元素
	var boxArr = new Array();
	// 获取父元素下所有的子元素
	var oElements = parent.getElementsByTagName('*');
	// 遍历取出来的每一个子元素
	for(var i=0; i<oElements.length; i++){
		//判断，如果获取的class名与传入的clsName相等，则就是我们要获取的class,放入数组中
		if(oElements[i].className==clsName){
			boxArr.push(oElements[i]);
		}
	}
	//循环结束，返回数组，得到数组的全部内容
	return boxArr;
}

//封装函数，得到索引值
function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}


//封装函数，判断是否具有图片加载的条件
function checkScrollSlide(){
	var oParent = document.getElementById('main');
	var oBox = getByClass(oParent,'box');
	// 通过索引，获取最后一个盒子
	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	//获取页面滚动的距离
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

	//获取当前浏览器的可视高度
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	return (lastBoxH < scrollTop + height) ? true : false;
}