function logingo(){
	$.post(
		"../php/lib/shop.php",
		"type=infor",
		function(data){
			for(var i in data){
				if(data[i] != null && i != "money"){
					$("#"+i).val(data[i]);
				}
			}
		},
		"json"
	);
	$("#button").click(function(){
		history.back();
	})
}
function loginout(){
	alert("请登录");
	location.href = "login.html";
}