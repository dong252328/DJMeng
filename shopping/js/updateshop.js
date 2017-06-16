var id = window.location.search.substr(4);
$.post(
	"../../php/admin/insertshop.php",
	"type=request_type",
	function(data){
		console.log(data);
		for(var i in data){
			var option = $("<option value="+data[i].id+">"+data[i].name+"</option>");
			$("#type_id").append(option);
		}
		$.post(
			"../../php/admin/updateshop.php",
			{
				"type":"requestAll",
				"id":id
			},
			function(data){
				for(var i in data){
					if(i !== "imgpath"){
						$("#"+i).val(data[i]);
					}
					if(i === "imgpath"){
						console.log(data[i])
						$("#imgpath").attr("src",data[i]);
					}
				}
			},
			"json"
		)
	},
	"json"
)