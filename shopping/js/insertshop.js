$.post(
	"../../php/admin/insertshop.php",
	"type=request_type",
	function(data){
		console.log(data);
		for(var i in data){
			var option = $("<option value="+data[i].id+">"+data[i].name+"</option>");
			$("#type_id").append(option);
		}
	},
	"json"
)