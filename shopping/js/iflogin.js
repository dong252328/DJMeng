$.post(
	"../php/common/iflogin.php",
	"type=iflogin",
	function(data){
		if(data == "select"){
			logingo();
		}
		if(data == "error"){
			loginout();
		}
	}
)