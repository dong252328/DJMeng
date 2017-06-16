var id = window.location.search.substr(4);
$("input[name='id']").val(id);
$("input:submit").click(function(){
	var password1 = $("input[name='password1']").val(),
	password2 = $("input[name='password2']").val();
	if(password1 === password2){
		return true;
	}else{
		return false;
	}
})