$.post(
	"../php/lib/shop.php",
	"type=infor",
	function(data){
		for(var i in data){
			if(i != "sex" && data[i] != null){
				$("#"+i)[0].innerHTML += data[i];
			}
			if(i == "sex"){
				switch(data[i]){
					case "0":
					    $("#sex")[0].innerHTML += "保密";
					    break;
					case "1":
						$("#sex")[0].innerHTML += "男";
						break;
					case "2":
						$("#sex")[0].innerHTML += "女";
						break;
				}
			}
		}
	},
	"json"
);
$("#editinformation").click(function(){
	location.href = "editinformation.html";
});
$("#top_up").click(function(){
	$("#num").css("display","inline-block");
	$("#up").css("display","inline-block");
	$("#out").css("display","inline-block");
})
$("#out").click(function(){
	$("#num").css("display","none");
	$("#up").css("display","none");
	$("#out").css("display","none");
})
$("#up").click(function(){
	$.post(
		"../php/lib/top_up.php",
		{
			"type":"top_up",
			"money":$("#num").val()
		},
		function(data){
			alert(data);
			logingo();
		},
	)
})