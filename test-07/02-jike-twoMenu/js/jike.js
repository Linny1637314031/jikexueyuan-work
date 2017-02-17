
// 鼠标滑过课程图片出现播放按钮
$(function(){	
	// 切换预览模式
	

	$(".list-icon").click(function(){
		$("#changeid2").show();
		$("#changeid").hide();
	});

	$(".kuai-icon").click(function(){
		$("#changeid").show();
		$("#changeid2").hide();
	});


	// 块级预览模式
	$("#changeid").find("li").hover(
		function(){
			$(this).find(".lessonplay").animate({ opacity:1 },200);
			$(this).find(".lesson-info").addClass("lesson-hover");
			$(this).find(".lesson-info").animate({height:"175px",},300);
			$(this).find("p").animate({
				height: "52px",
				opacity: 1,
			},300);
			$(this).find("p").show();
			$(this).find(".dengji").show();
			$(this).find(".learn-number").show();
			$(this).find(".lessonicon-box").css("bottom","2px");
		},
		function(){
			$(this).find(".lessonplay").animate({ opacity:0 },200);
			$(this).find(".lesson-info").removeClass("lesson-hover");
			$(this).find(".lesson-info").animate({height:"88px",},300);
			$(this).find("p").animate({
				height: "0px",
				opacity: 0,
			},300);
			$(this).find("p").hide();
			$(this).find(".dengji").hide();
			$(this).find(".learn-number").hide();
			$(this).find(".lessonicon-box").css("bottom","8px");
		}
	);

	// 两栏预览模式
	$("#changeid2").find("li").hover(
		function(){
			$(".lesson-list").stop();
			$(this).find(".lessonplay").animate({ opacity:1 },200);
		},
		function(){
			$(".lesson-list").stop();
			$(this).find(".lessonplay").animate({ opacity:0 },100);
		}
	);

	

	// 点击出现搜索框
	// $("#search-btn").click(function(){
	// 	$(".searchbox").addClass("scale");
	// });

	// $("#close-btn").click(function(){
	// 	$(".searchbox").removeClass("scale");
	// });
	
	
	$("#search-btn").click(function(){
		$(".searchbox").animate({
			opacity:0,
        width:"850px",
      },1000);
	});


	// 返回顶部
	$(window).scroll(function(){
		//获取滚动条滚动的距离
		var scrollTop = $(window).scrollTop();
		if( scrollTop != 0 ){
			$(".top").css("visibility","visible");
		}else{
			$(".top").css("visibility","hidden");
		}
	});

	$(".top").click(function(){
		$("body,html").animate({ scrollTop : 0 },200);
	});
})