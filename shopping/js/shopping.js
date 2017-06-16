var id = window.location.search.substr(4);
function logingo(){
	$("#loginout").css("display","none");
	$("#logingo").css("display","block");
	$(".shopcar").click(function(){
		location.href="shopcar.html"
	})
	$("#addshop").click(function(){
		$.get(
			"../php/lib/shopping.php",
			{
				type:"addshop",
				shop_id:id,
				count:$("#count").val()
			},
			function(data){
				if(data == "666"){
					alert("加入购物车成功");
				}else{
					alert("加入购物车失败");
				}
			}
		)
	})
};
function loginout(){
	$("#loginout").css("display","block");
	$("#logingo").css("display","none");
	$(".shopcar").click(function(){
		alert("你没有登陆， 请登录。")
		location.href="login.html"
	})
	$("#addshop").click(function(){
		alert("你没有登陆， 请登录。")
		location.href="login.html"
	})
};
$(function(){
	$.post(
		"../php/lib/shopping.php",
		{
			type:"readshop",
			id:id,
		},
		function(data){
			var img = $("<img>").attr({
				"src":data['imgpath'],
			}).css({
				"width":"50%",
				"float":"left",
			}),
			h2 = $("<h2></h2>").html(data['name']),
			h4 = $("<h4></h4>").html(data['description']),
			h3 = $("<h3></h3>").html("￥"+data['price']),
			div = $("<div></div>").append(h2,h4,h3).css({
				"width":"40%",
				"float":"left",
				"padding":"20px"
			});
			$("#shopping").append(img,div);

		},
		"json"
	)
	

})