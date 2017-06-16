$.post(
	"../../php/admin/islogin.php",
	"type=islogin",
	function(data){
		if(data === "no"){
			alert("警告!警告! 您已非法入侵,请您退出");
			location.href = "login.html";
		}
	}
)