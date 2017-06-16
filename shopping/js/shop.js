function logingo(){
	$("#loginout").css("display","none");
	$("#logingo").css("display","block");
	$(".shopcar").click(function(){
		location.href="shopcar.html"
	})
	$.post(
		"../php/lib/shop.php",
		"type=infor",
		function(data){
			for(var i in data){
				if(i == "username"){
					$("#"+i)[0].innerHTML += data[i];
				}	
			}
		},
		"json"
	);
}
function loginout(){
	$("#loginout").css("display","block");
	$("#logingo").css("display","none");
	$(".shopcar").click(function(){
		alert("你没有登陆， 请登录。")
		location.href="login.html"
	})
};
$(function(){
	
	function heef(paging){
		$.post(
			"../php/lib/shop.php",
			{
				type:"readshop",
				sum:paging
			},
			function(data){
				for(var i in data){
					(function(j){
						var div = $("<div></div>"),
						img = $("<img>").attr({
							src:data[j]['imgpath'],
						}),
						h4 = $("<h4></h4>").html(data[j]['name']),
						h6 = $("<h6></h6>").html(data[j]['description']),
						h5 = $("<h5></h5>").html("&yen;"+data[j]['price']);
						div.append(img,h4,h6,h5);
						$("#shop").append(div);
						div.click(function(){
							location.href = "shopping.html?id="+data[j]['id']
						})
					})(i)
				}
			},
			"json"
		);
	}
	heef(1);
	$.post(
		"../php/lib/shop.php",
		"type=paging",
		function(a){
			for(var i=1;i<a+1;i++){
				(function(j){
					var a = $("<a></a>")
					.html(j)
					.css({
						"width":"20px",
						"margin":"10px"
					})
					.click(function(){
						$("#shop").html("");
						heef(j);
					});
					$("#paging").append(a);
				})(i)
			}
		},
		"json"
	);

})