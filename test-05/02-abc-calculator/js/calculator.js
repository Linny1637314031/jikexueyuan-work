// //方法一：
// //
// //加法运算
// function jia(){
// 	var x,y,z;//定义三个变量
// 	x = document.getElementById("num1").value;
// 	y = document.getElementById("num2").value;
// 	z = Number(x) + Number(y);
// 	document.getElementById("result").value=parseFloat(z.toFixed(8));
// 	//toFixed(n) 限制小数点后位数，四舍五入。n:0~20 。
// 	//parseFloat() 函数可解析一个字符串，并返回一个浮点数。
// 	//该函数指定字符串中的首个字符是否是数字。如果是，则对字符串进行解析，直到到达数字的末端为止，然后以数字返回该数字，而不是作为字符串。
// }


// //减法运算
// function jian(){
// 	var x,y,z;//定义三个变量
// 	x = document.getElementById("num1").value;
// 	y = document.getElementById("num2").value;
// 	z = Number(x) - Number(y);
// 	document.getElementById("result").value=parseFloat(z.toFixed(8));
// }


// //加法运算
// function cheng(){
// 	var x,y,z;//定义三个变量
// 	x = document.getElementById("num1").value;
// 	y = document.getElementById("num2").value;
// 	z = Number(x) * Number(y);
// 	document.getElementById("result").value=parseFloat(z.toFixed(8));
// }


// //加法运算
// function chu(){
// 	var x,y,z;//定义三个变量
// 	x = document.getElementById("num1").value;
// 	y = document.getElementById("num2").value;
// 	if(y==0){    //这里需要判断除数不能为0
// 		alert("除数不能为0！");
// 		document.getElementById("result").value="NaN";
// 	} else {
// 		z = Number(x) / Number(y);
// 		document.getElementById("result").value=parseFloat(z.toFixed(8));
// 	}
// }


//方法二：
function cal(char){
	var a,b,c;
	a = document.getElementById("num1").value;
	b = document.getElementById("num2").value;
	if(!a.trim()||!b.trim()){
		alert('输入为空，请输入计算数据');
		return;
	}
	if(isNaN(a)||isNaN(b)){
		alert('输入不合法，请输入计算数据');
		return;
	}
	switch (char) {
		case '+':
			c = Number(a) + Number(b);
			break;
		case '-':
			c = Number(a) - Number(b);
			break;
		case '*':
			c = Number(a) * Number(b);
			break;
		case '/':
			if(b==0){    //这里需要判断除数不能为0
				alert("除数不能为0！");
				document.getElementById("result").value="NaN";
			} else {
				c = Number(a) / Number(b);
				document.getElementById("result").value=parseFloat(c.toFixed(8));
				}
			break;
	}
	document.getElementById("result").value = parseFloat(c.toFixed(8));
}