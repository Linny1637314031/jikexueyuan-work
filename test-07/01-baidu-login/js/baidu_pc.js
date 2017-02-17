
// 设置天气功能
$(".weather-hover").hover(
	function(){
		$(".set-weather-box").show();
	},
	function(){
		$(".set-weather-box").hide();
	}
);

// 二级菜单
$(function(){
	// 二级下拉菜单
	$(".navmenu").hover(
	    function(){
	        $(this).find(".menus").show();
	    },
	    function(){
	        $(this).find(".menus").hide();
	    }
	);


	// 更多产品展现功能
	$(".more-hover").hover(
	    function(){
	    	$(".more_02").show();
	    },
	    function(){
	    	$(".more_02").hide();
	    }
	);
});





// logo动画
var index = 0;  //表示第几张图片
setInterval(function(){
	index++;  //切换到下一张
	// console.log(index);
	//到了最后一张图片的时候，需要重置
	/*
	if(index>=84){index=0;}
	 */
	
	index %= 84;
	var pos = index * -270 + "px";
	$(".lg-animation").css("background-position",pos + " 0px" );
},50);








//获取id封装成一个函数
function g(id){ return document.getElementById(id);}


// 搜索框吸顶功能
var nT = g('form-con').offsetTop;
// console.log(nT);
document.onscroll = function(){
	var sT = document.body.scrollTop || document.documentElement.scrollTop;
	//判断
	if(sT >= nT){
		g('top_form').className = "top-form";
		g('lg').style.display = "none";
		g('min-lg').style.display = "block";
	}else{
		g('top_form').className = "s-form";
		g('lg').style.display = "block";
		g('min-lg').style.display = "none";
	}
}



// 导航网址下滑部分
$(".fanli-nav").each(function(index){
	$(this).hover(
		function(){
			$(".fanli-nav").eq(index).children(".rebate").css("display","block");
		},
		function(){
			$(".fanli-nav").eq(index).children(".rebate").css("display","none");
		}
	);
});



// 视频连接部分
// 不感兴趣图标显示
function picHover(){
	$(".video-item").each(function(index){
		$(this).hover(
			function(){
				// 创建标签，添加关注关注出现
				var unsub = $("<div>").addClass("unsub").appendTo($(".subscribe").eq(index));
				$("<b>").addClass("sub-star").appendTo(unsub);
				$("<span>").addClass("sub-txt").text("添加关注").appendTo(unsub);



				// console.log($(".subscribe"));
				// 点击关注，鼠标滑过显示深色,不感兴趣的提示信息出现
				
				$(".subscribe").hover(
					function(){
						$(".sub-star").css("background-position","-4px -21px");
						$(".sub-txt").show();
					},
					function(){
						$(".sub-star").css("background-position","-4px -2px");
						$(".sub-txt").hide();
					}
				);
			


				// 垃圾箱显示
				$(".pic-hover").eq(index).children(".dustbin").show();

				// 垃圾箱按钮，鼠标滑过显示深色
				$(".dustbin").hover(
					function(){
						$("<div>").addClass("no-like").text("不感兴趣").appendTo(this);
						$(this).css("background-position","-48px -21px");
					},
					function(){
						$(this).empty();
						$(this).css("background-position","-48px -2px");
					}
				);
				


				// 电影标签隐藏
				$(".pic-hover").eq(index).children(".tag-sort").hide();

				var subs = $(".subscribe");
				// console.log(subs);

				// 垃圾箱按钮，点击出现不感兴趣
				$(".dustbin").each(function(i){
					$(this).on("click",function(){
						$(".dustbin").eq(i).siblings(".buzz").show();
						// 出现半透明的黑色遮罩层
						$(".dustbin").eq(i).siblings(".black").show();
						// 垃圾箱隐藏
						$(".dustbin").eq(i).remove();
						//电影标签隐藏
						$(".dustbin").eq(i).siblings(".tag-sort").remove();
						// 点击关注按钮隐藏
						$(".dustbin").eq(i).parent().siblings(".subscribe").remove();
						// alert(a);
						return false;
					});
				});


				
			},
			function(){
				$(".subscribe").empty();
				$(".pic-hover").eq(index).children(".dustbin").hide();
				$(".pic-hover").eq(index).children(".tag-sort").show();
			}
		);
	});


};
picHover();


// 购物连接部分
$(".tab_0").hover(
	function(){
		$(this).addClass("white");
		$(".arrow").addClass("up");
		$(".sub").addClass("in");
	},
	function(){
		$(this).removeClass("white");
		$(".arrow").removeClass("up");
		$(".sub").removeClass("in");
	}
);



// 选项卡功能
$(function(){
	$(".menus-item").on("click",function(){
		//切换选中的按钮高亮状态
		$(this).addClass("current").siblings().removeClass("current");
		//获取被按下按钮的索引值，需要注意index是从0开始的
		var index = $(this).index();
		//在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
		$(".mod-con").eq(index).show().siblings().hide();
	});
});





// LocalStorag存储换肤功能

//新建变量a获取本地存贮的localStorage中的a
var a = localStorage.getItem("a");
//创建localStorage对象
var storage = window.localStorage;

//判断localStorage是否存在
if(a == null && a == undefined){
	//如果不存在，设置背景为默认的白色
	$(".pc-page").css("background","#fff");
}else{
	//如果存在，将背景图片设置为a背景
	$(".pc-page").css("background",a);
	$(".pc-page").css("background-size",screen.availWidth+"px "+screen.availHeight+"px");
}

//检测是否localStorage储存了路径
// console.log(a);





// 换肤功能
var src;
$(function(){
	$(".bgcon img").each(function(index){
		// 鼠标滑过预览图片
		$(".bgcon img").eq(index).hover(
			function(){
				src = $(".bgcon img").eq(index).attr("src");
				// console.log(src);
				$(".bgy1").css("background","url("+src+")");
				$(".bgy1").css("background-size","264px 180px");
			},
			function(){
				$(".bgy1").css("background","#fff");
			}
		);

		// 鼠标点击切换背景图
		$(".bgcon img").eq(index).on("click",function(){
			src = $(".bgcon img").eq(index).attr("src");
			//把路径存到localStorage对象的a中
			storage.a = "url("+src+")";
			$(".pc-page").css("background",storage.a);
			$(".pc-page").css("background-size",screen.availWidth+"px "+screen.availHeight+"px");
			// 不使用换肤文本出现
			$(".skin-set").show();
			// $.cookie("theme",src);
		});

	});




	//点击，不使用换肤
	$(".skin-set").on("click",function(){
		//把路径存到localStorage对象的a中
		storage.a = "#fff";
		$(this).hide();
		$(".pc-page").css("background",storage.a);
	});

	$(".skin-set").hover(
		function(){
			$(this).addClass("is-hover");
		},
		function(){
			$(this).removeClass("is-hover");
		}
	);


	//判断是否要显示"不使用皮肤的按钮"
	if(a == "#fff"){
		$(".skin-set").hide();
	}else{
		$(".skin-set").show();
	}

	//点击收起换肤功能
	$(".skin-up").click(function(){
		$(".s-skin-layer").animate({ height:"0px" },500);
	});

	// 点击出现换肤功能
	$("#s-skin").click(function(){
		$(".s-skin-layer").animate({ height:"278px" },1000);
	});


	
});



// 返回顶部
$(".to-top").hover(
	function(){
		$(".to-top-text").show();
	},
	function(){
		$(".to-top-text").hide();
	}
);


$(window).scroll(function(){
	//获取滚动条滚动的距离
	var scrollTop = $(window).scrollTop();
	if( scrollTop != 0 ){	
		$(".s-top-feed").css("visibility","visible");
	}else{
		$(".s-top-feed").css("visibility","hidden");
	}
});

$(".s-top-feed").click(function(){
	$("body,html").animate({ scrollTop : 0 },200);
});



