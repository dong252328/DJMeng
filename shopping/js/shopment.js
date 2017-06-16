$.post(
	"../../php/admin/shopment.php",
	"type=request",
	function(data){
		for(var i in data){
			var tr = $("<tr></tr>").attr("align","center");
			console.log(tr[0])
			for(var j in data[i]){
				if(j === "imgpath"){
					var img = $("<img>").attr({
						"src":data[i][j],
						"width":"150px"
					});
					var td = $("<td></td>").html(img);
				}
				else if(j === "status"){
					if(data[i][j] == 1){
						var td = $('<td></td>').html("出售中");
					}
					if(data[i][j] == 2){
						var td = $('<td></td>').html("未出售");
					}
				}else{
					var td = $('<td></td>').html(data[i][j]);
				}
				tr.append(td);
			}
			var delet = $("<a></a>").attr({
				"href":"../../php/admin/deleteshop.php?id="+data[i]['id']
			}).html("删除").click(function(){
				return confirm("您确定要删除吗");
			});
			var update = $("<a></a>").attr({
				"href":"../../html/admin/updateshop.html?id="+data[i]['id']
			}).html("修改商品");
			var td = $("<td></td>").append(update,"|",delet);
			tr.append(td);
			$("table").append(tr);
		}
	},
	"json"
)