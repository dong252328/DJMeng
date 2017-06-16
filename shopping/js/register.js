// 验证用户信息
//验证用户名
function testUsername(username){
	var reg = /^[a-zA-Z]\w{5,15}$/;
	if(reg.test(username)){
		return true;
	}else{
		return false;
	}
}
//验证密码
function testPassword(password,password2){
	var reg = /^\w{6,15}$/;
	if(password === password2){
		if(reg.test(password) && reg.test(password1)){
			return true;
		}else{
			return false;
		}
	}else{
		return 200;
	}
}
//验证手机号
function testPhone(phone){
	var reg = /^1[34578]\d{9}$/;
	if(reg.test(phone)){
		return true;
	}else{
		return false;
	}
}
//验证邮箱
function testEmail(email){
	var reg =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	if(reg.test(email)){
		return true;
	}else{
		return false;
	}
}
//失焦判断
$(":text")[0].onblur = function(){
	if(this.value !==''){
		if(testUsername(this.value)){
			$("p:first").html("");
		}else{
			$("p:first").html("用户名格式不正确!  请输入以字母开头6个字符以上的用户名");
		}
	}else{
		$("p:first").html("用户名不能为空!");
	}
}
$(":text")[1].onblur = function(){
	if(this.value !==''){
		if(testPhone(this.value)){
			$("p")[3].innerHTML = ''
		}else{
			$("p")[3].innerHTML = '电话号码格式不正确!';
		}
	}else{
		$("p")[3].innerHTML = '电话号码不能为空!';
	}
}
$(":password")[1].onblur = function(){
	if(this.value !==''){
		var val = testPassword(this.value,$(":password")[0].value)
		if(val == 200){
			$("p")[2].innerHTML = '密码不一致！';
		}else if(val){
			$("p")[2].innerHTML = ''
		}else{
			$("p")[2].innerHTML = '密码格式不正确!';
		}
	}else{
		$("p")[2].innerHTML = '密码不能为空!';
	}
}
$("input")[4].onblur = function(){
	if(this.value !==''){
		if(testEmail(this.value)){
			$("p")[4].innerHTML = ''
		}else{
			$("p")[4].innerHTML = '电子邮箱格式不正确!';
		}
	}else{
		$("p")[4].innerHTML = '电子邮箱不能为空!';
	}
}
$("input").onclick = function(){
	if(!testPhone($("input")[0].value)){
		$("input")[0].focus();
		return false;
	}
	if(!testPhone($("input")[3].value)){
		$("input")[3].focus();
		return false;
	}
	if(!testEmail($("input")[4].value)){
		$("input")[4].focus();
		return false;
	}
	if(!testPassword($("input")[2].value,$("input")[1].value)){
		$("input")[2].focus();
		return false;
	}
}