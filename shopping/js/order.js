$.post(
	"../../php/admin/order.php",
	"type=readorder",
	function(data){
		console.log(data);
		for(var i in data){
			var tr = $("<tr></tr>"),
			order_id = $("<td></td>").html(data[i]['order_id']),
			shop_name = $("<td></td>").html(data[i]['shop_name']),
			realname = $("<td></td>").html(data[i]['realname']),
			price = $("<td></td>").html("￥"+data[i]['price']),
			type_name = $("<td></td>").html(data[i]['type_name']),
			img = $("<img>").attr("src",data[i]['imgpath']).css("width","150px")
			imgpath = $("<td></td>").html(img),
			count = $("<td></td>").html(data[i]['count']),
			dates = new Date(parseInt(data[i]['date'])*1000),
			date = $("<td></td>").html(dates),
			kdname = $("<td></td>").html(data[i]['kdname']),
			sum = $("<td></td>").html("￥"+data[i]['sum']),
			up = $("<a></a>").html("编辑订单").attr({
				"href":"uporder.html?order_id="+data[i]['order_id']
			}),
			update =  $("<td></td>").append(up),
			de = $("<a></a>").html("删除订单").attr({
				"href":"../../php/admin/deorder.php?order_id="+data[i]['order_id']
			}),
			delet =  $("<td></td>").append(de),
			tr.append(order_id,realname,shop_name,price,type_name,imgpath,count,date,sum,kdname,update,delet);
			$("#shop_order").append(tr);
		}
	},
	"json"
)