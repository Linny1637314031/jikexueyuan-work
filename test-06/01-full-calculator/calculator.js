//在计算机上显示当前时间
setInterval(function(){
	var date = new Date();
	var str = date.toLocaleString();
	document.getElementById("time").innerText = str;
},1000);



//在开始函数之前要初始化
var num = 0, result = 0, numshow = 0; //数字为0，结果为0，显示器上的数字为0
var operate = 0;  //判断输入状态的标志
var calcul = 0;   //判断计算状态的标志
var quit = 0;     //防止重复按键的标志


//第一步：点击按钮输入数字
function command(num){
	// String() 函数把对象的值转换为字符串。
	var str = String(document.calculator.numScreen.value);  //获取当前显示的数据
	//在输入数据之前要清空
	str = (str != "0") ? ((operate == 0) ? str : "") : "";
	//如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值；
	str += String(num);   //给当前值追加字符
	document.calculator.numScreen.value = str; //刷新显示
	operate = 0;   //重置输入状态
	quit = 0;      //重置防止重复按键的标志
}

//输入00功能
function dzero(){
	var str = String(document.calculator.numScreen.value);
	str = (str != "0") ? ((operate == 0) ? str + "00" : "0") : "0";
	//如果当前值不是"0"，且状态为0，则返回当前值str+"00",否则返回"0";
	document.calculator.numScreen.value = str;
	operate = 0;
}


//输入小数点.功能
function dot(){
	var str = String(document.calculator.numScreen.value);
	str = (str != "0") ? ((operate ==0) ? str : "0") : "0";
	//如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0";
	//然后遍历输入的数据，判断是否有小数点
	for(i = 0; i <= str.length; i++){
		if(str.substr(i,1) == ".") return false;  //如果有一个则不再插入
	}
	str += ".";  //把小数点.追加到当前值
	//把得到的数据赋值给显示屏
	document.calculator.numScreen.value = str;
	operate = 0;
}

//退格的功能
function del(){
	var str = String(document.calculator.numScreen.value);
	str = (str != "0") ? str : "";
	str = str.substr(0,str.length-1);  //退一格之后返回数据
	//再次判断，如果当前值不为空，则返回当前值，否则返回为0；
	str = (str != "") ? str : "0";
	document.calculator.numScreen.value = str;
}


//sin功能
function sin(){
	var str = String(document.calculator.numScreen.value);
	str = (str != "0") ? str : "";
	//计算函数注意要讲数值转为角度
	str = parseFloat(Math.sin(str*Math.PI/180).toFixed(8));
	document.calculator.numScreen.value = str;
}


//cos功能
function cos(){
	var str = String(document.calculator.numScreen.value);
	str = (str != "0") ? str : "";
	str = parseFloat(Math.cos(str*Math.PI/180).toFixed(8));
	document.calculator.numScreen.value = str;
}


//清屏功能
function clearScreen(){
	num = 0;
	result = 0;
	numshow = 0;
	document.calculator.numScreen.value = "0";
}

//加法
function plus(){
	calculate();  //调用运算函数
	operate = 1;  //更改输入状态
	calcul = 1;  //更改计算状态为"+"
}

//减法
function minus(){
	calculate();  //调用运算函数
	operate = 1;  //更改输入状态
	calcul = 2;  //更改计算状态为"-"
}

//乘法
function times(){
	calculate();  //调用运算函数
	operate = 1;  //更改输入状态
	calcul = 3;  //更改计算状态为"*"
}

//除法
function divide(){
	calculate();  //调用运算函数
	operate = 1;  //更改输入状态
	calcul = 4;  //更改计算状态为"/"
}

//求余
function persent(){
	calculate();  //调用运算函数
	operate = 1;  //更改输入状态
	calcul = 5;  //更改计算状态为"%"
}

//等于
function equal(){
	calculate();  //调用运算函数
	operate = 1;  //更改输入状态
	num = 0;
	result = 0;
	numshow = "0";
}



//运算函数
function calculate(){
	//将显示屏上的字符串转为数值
	numshow = Number(document.calculator.numScreen.value);
	//判断前一个运算数是否为0，以及防止重复按键的状态
	if(num != 0 && quit != 1){
		switch(calcul){                            //判断输入状态
			case 1:result = parseFloat((num + numshow).toFixed(8)); break;  //计算"+"
			case 2:result = parseFloat((num - numshow).toFixed(8)); break;  //计算"-"
			case 3:result = parseFloat((num * numshow).toFixed(8)); break;  //计算"*"
			case 4:if(numshow != 0){
				result = parseFloat((num / numshow).toFixed(8));
			}else{
				result = "NaN";
				document.getElementById("note").innerHTML = "除数不能为0！！！";
				setTimeout(clearnote,4000);
			}break;
			case 5:result = parseFloat((num % numshow).toFixed(8)); break;
		}
		quit = 1; //避免重复按键
	}else{
		result = numshow;
	}
	//最后再把得出的结果返回字符串，以便开始下一轮计算
	numshow = String(result);
	document.calculator.numScreen.value = numshow;
	num = result;  //存储当前值
}



//清空提示文本
function clearnote(){
	document.getElementById("note").innerHTML ="";
}
