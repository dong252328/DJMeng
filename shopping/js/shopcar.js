$.post(
	"../php/lib/shopcar.php",
	"type=shop_car",
	function(data){
		for(var i in data){
			(function(j){
				var img = $("<img>").attr("src",data[j]['imgpath']).addClass("img float"),
				name = $("<h4></h4>").html(data[j]['name']),
				description = $("<h4></h4>").html(data[j]['description']),
				price = $("<h4></h4>").html("￥"+data[j]['price']),
				count = $("<input>").attr({
					type:"number",
					value:data[j]['count']
				}).change(function(){
					var num = $(this).val();
					$.post(
						"../php/lib/shopcar.php",
						{
							type:"upcount",
							count:num,
							sc_id:data[j]['sc_id']
						},
						function(a){
							if(a == "666"){
								alert("修改成功");
							}
						}
					)
				}),
				checkbox = $("<input>").addClass("checkbox").attr({
					"type":"checkbox",
					"name":"change"
				}).val(data[j]['sc_id']),
				sumpri = $("<h4></h4>").html("￥"+data[j]['price']*data[j]['count']),
				div1 = $("<div></div>").append(checkbox,name,description,price,count,sumpri).addClass("div1 float"),
				div2 = $("<div></div>").append(img,div1).addClass("div2");
				$("#shop_car").append(div2);
			})(i)
		}
	},
	"json"
)
// 全选
$("#check").change(function(){
	    console.log( $(".checkbox"))
	if(this.checked){
	    $(".checkbox").each(function(){
	    	this.checked = true;
	    });
	}else{
		 $(".checkbox").each(function(){
	    	this.checked = false;
	    });
	}
});
// 付款
$("#pay").click(function(){
	var arr = [];
	$(".checkbox:checked").each(function(){
		arr.push($(this).val())
	})
	var str = JSON.stringify(arr);
	$.post(
		"../php/lib/shopcar.php",
		{
			type:"pay_shop",
			id:str
		},
		function(b){
			if(b == "ok"){
				alert("付款成功，正在生成订单");
			}else{
				alert("您的余额不足，请您充值！！");
				location.href="person.html";
			}
		}
	)
})
$("#delete").click(function(){
	var arr = [];
	$(".checkbox:checked").each(function(){
		arr.push($(this).val())
	})
	var str = JSON.stringify(arr);
	$.post(
		"../php/lib/shopcar.php",
		{
			type:"delete_car",
			id:str
		},
		function(b){
			if(b == "ok"){
				alert("删除成功");
			}
		}
	)
})