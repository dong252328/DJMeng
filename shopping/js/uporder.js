var order_id = window.location.search.substr(10);
$.post(
	"../../php/admin/uporder.php",
	"type=readexpress",
	function(a){
		for(var i in a){
			var option = $("<option></option>").val(a[i]['id']).html(a[i]['name']);
			$("#exp").append(option);
		}
	},
	"json"
)
$.post(
	"../../php/admin/uporder.php",
	{
		type:"selectorder",
		order_id:order_id
	},
	function(data){
		for(var i in data){
			$("input[name='"+i+"']").val(data[i])
		}
	},
	"json"
)