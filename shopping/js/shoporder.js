$.post(
	"../php/lib/shoporder.php",
	"type=readorder",
	function(data){
		console.log(data);
		for(var i in data){
			var tr = $("<tr></tr>"),
			order_id = $("<td></td>").html(data[i]['order_id']),
			shop_name = $("<td></td>").html(data[i]['shop_name']),
			price = $("<td></td>").html("￥"+data[i]['price']),
			type_name = $("<td></td>").html(data[i]['type_name']),
			img = $("<img>").attr("src",data[i]['imgpath']).css("width","150px")
			imgpath = $("<td></td>").html(img),
			count = $("<td></td>").html(data[i]['count']),
			date = $("<td></td>").html(data[i]['date']),
			sum = $("<td></td>").html("￥"+data[i]['sum']);
			tr.append(order_id,shop_name,price,type_name,imgpath,count,date,sum);
			$("#shop_order").append(tr);
		}
	},
	"json"
)