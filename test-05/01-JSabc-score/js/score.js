//方法一：
//使用if...else实现
// function result(){
// 	var x,y;//定义一个变量，表示分数和等级
// 	x = document.getElementById("score").value;
// 	y = function(score){
// 		if ( score <= 100 && score >=90 ) {
// 			lever = "A";
// 		} else if ( score < 90 && score >= 80 ) {
// 			lever = "B";
// 		} else if ( score < 80 && score >= 70 ) {
// 			lever = "c";
// 		} else if ( score < 70 && score >= 60 ) {
// 			lever = "D";
// 		} else if ( score < 60 && score >= 0 ) {
// 			lever = "E";
// 		} else {
// 			lever = "error";
// 		}
//      return lever;
// 	}
// 	document.getElementById("lever").value=y(x);
// }


//方法二：
//使用if...else实现
function result() {
    var x, y; //定义一个变量，表示分数和等级
    x = document.getElementById("score").value;  //从浏览器中获取分数
    y=panduan(x);//获取x的判断结果值
	document.getElementById("lever").value = y;
}

//分为两个方法，一个负责显示，一个负责逻辑


function panduan(score) {     //判断分数的等级
    if (score <= 100 && score >= 90) {
        lever = "A";
    } else if (score < 90 && score >= 80) {
        lever = "B";
    } else if (score < 80 && score >= 70) {
        lever = "c";
    } else if (score < 70 && score >= 60) {
        lever = "D";
    } else if (score < 60 && score >= 0) {
        lever = "E";
    } else {
        lever = "error";
    }
    return lever;
}