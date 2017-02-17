//这里使用的是单例设计模式
//原因：可以使js代码结构更加清晰，避免代码污染全局
//有利于团队合作
var baidu = {
	init:function(){
		this.buld();
		this.render();
	},
	render:function(){
		//全局变量
		var a;
		var storage;
	},
	buld:function(){
		//鼠标滑过出现返回顶部的字眼
		this.tophover();
		//返回顶部
		this.topback();
		//天气二级菜单
		this.setweather();
		//导航栏二级菜单
		this.navmenu();
		//logo动画
		this.logo();
		//选项卡
		this.tab();
		//存储换肤功能
		this.LocalStorag();
		//换肤功能
		this.setskin();
	},
	tophover:function(){
		$(".to-top").hover(
			function(){
				$(".to-top-text").show();
			},
			function(){
				$(".to-top-text").hide();
			}
		);
	},
	topback:function(){
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
	},
	setweather:function(){
		$(".weather-hover").hover(
			function(){
				$(".set-weather-box").show();
			},
			function(){
				$(".set-weather-box").hide();
			}
		);
	},
	navmenu:function(){
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
	},
	logo:function(){
		var index = 0;  //表示第几张图片
		setInterval(function(){
			index++;  //切换到下一张
			// console.log(index);
			//到了最后一张图片的时候，需要重置
			index %= 84;  // if(index>=84){index=0;}
			var pos = index * -270 + "px";
			$(".lg-animation").css("background-position",pos + " 0px" );
		},50);
	},
	tab:function(){
		$(".menus-item").on("click",function(){
			//切换选中的按钮高亮状态
			$(this).addClass("current").siblings().removeClass("current");
			//获取被按下按钮的索引值，需要注意index是从0开始的
			var index = $(this).index();
			//在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
			$(".mod-con").eq(index).show().siblings().hide();
		});
	},
	LocalStorag:function(){
		// LocalStorag存储换肤功能

		//新建变量a获取本地存贮的localStorage中的a
		a = localStorage.getItem("a");
		//创建localStorage对象
		storage = window.localStorage;

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
	},
	setskin:function(){
		var src;
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
	}
};

baidu.init();


