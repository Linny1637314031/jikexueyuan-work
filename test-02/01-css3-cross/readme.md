##十字架[【预览页面】](http://htmlpreview.github.io/?https://github.com/Linny1637314031/jikexueyuan-work/blob/master/test-02/01-css3-cross/ten.html)
项目要求：

>* 制作一个由5个100*100DIV组成的十字架;

>* 中间放一张icon（64*64的小图片）在DIV里垂直水平居中;

>* 十字架页面垂直居中水平居中；

>* 每一个DIV要有边框阴影尽量的让其漂亮;

>* [可在此寻找对应的图片](http://www.easyicon.net/ )

=====

#####核心技术：

>* 水平垂直居中方法；---[参考文档](http://blog.csdn.net/a7282787/article/details/51034440)
```
.content {  /*水平垂直居中的方法*/
	position:absolute;
	top:0;
	left:0;
	bottom:0;
	right:0;
	width:300px;
	height:300px;
	margin:auto;
}
```

>* CSS3的渐变效果

```

/*从上到下的渐变效果，默认是从上到下的渐变*/
/* Safari 5.1 - 6.0 */
#grad {
	width: 400px;
	height: 400px;
	background: -webkit-linear-gradient(red, blue);
}


/*标准语法*/
#grad {
	width: 400px;
	height: 400px;
	background: linear-gradient(#bd1cd5, blue);
} 

/*从左到右渐变*/
#grad {
	width: 400px;
	height: 400px;
	background: linear-gradient(to right, red , blue);
} 


/*从左上角到右下角的线性渐变：*/
#grad {
	width: 400px;
	height: 400px;
	background: linear-gradient(to bottom right, red , blue);
} 

```

>* CSS3 box-shadow属性的使用
