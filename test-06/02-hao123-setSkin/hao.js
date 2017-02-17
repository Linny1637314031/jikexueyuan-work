/*
js页面换肤功能处理原理
1.换肤是让页面采用不用的样式设置
2.我们把要换肤的地方根据不用皮肤做成多个样式表文件
3.获取link的id
4.修改link的href属性改变样式表
5.采用了不用样式表，就是使用对应皮肤样式
6.利用cookie技术用户原则，用户再次打开页面也会采用上次选用皮肤
7.读取cookie要在页面载入开始，保证对应皮肤css提前加载
*/

//读取cookie，换肤
var skin = document.getElementById("skin");  //拿到link元素
var cookieval = document.cookie;  //获取cookie
var skipval = readcookie("skin");
//如果cookie不存在记录
if(!skipval){
	skin.href = "css/color-green.css";
} else {
	skin.href = "css/color-" + skipval+".css";//有记录
};

window.onload=function(){
    //点击按钮换肤
    var skin_green = document.getElementById("green");
    var skin_orange = document.getElementById("orange");
    var skin_red = document.getElementById("red");
    var skin_blue = document.getElementById("blue");
    var Days = 30;  //设置过期时间，30天以后
    var exp = new Date();  
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    skin_green.onclick=function(){   
        skin.href="css/color-green.css";
        document.cookie = "skin=green;expires="+exp.toUTCString();
    };
    skin_orange.onclick=function(){
        skin.href="css/color-orange.css";
        document.cookie = "skin=orange;expires="+exp.toUTCString();
    };
    skin_red.onclick=function(){
        skin.href="css/color-red.css";
        document.cookie = "skin=red;expires="+exp.toUTCString();
    };
    skin_blue.onclick=function(){
        skin.href="css/color-blue.css";
        document.cookie = "skin=blue;expires="+exp.toUTCString();
    };
};

//读取cookie指定值
function readcookie(key){	
	var skinval=false;
	var arrkv=cookieval.split(";");	
	for(var i=0;i<arrkv.length;i++){	
		var itemc=arrkv[i].split("=");
		if(itemc[0]==key){	
			skinval=itemc[1];
		}else{
		};
	};	
	return skinval;
};