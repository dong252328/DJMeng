// 京东

var a=1;
	var lunbo_img=document.querySelectorAll('#lunbo_img>img');
	var lunbo_link=document.querySelectorAll('#lunbo_link>a');
	// console.log(lunbo_img)
	function autoPlay(){
		if(arguments[0]!=null){
			a=arguments[0]
		}
		if(a>=8){
			a=0;
		}
		if(a<0){
			a=7;
		}
		for(var i=0;i<lunbo_img.length;i++){
			lunbo_img[i].style ='z-index:1';
		}
		lunbo_img[a].style ='z-index:2';
		for(var i=0;i<lunbo_link.length;i++){
			lunbo_link[i].className ='';
		}
		lunbo_link[a].className ='active';
	}
	var time = setInterval(function(){
		autoPlay();
		a++;
	},2000);
	document.querySelector('#lunbo_img').onmouseover = function(){
		clearInterval(time)
	}
	document.querySelector('#lunbo_img').onmouseout = function(){
			time = setInterval(function(){
			autoPlay();
			a++;
			},2000);
	}
	document.querySelector('#lunbo_right').onclick = function(){
		a++;
		autoPlay();
	}
	document.querySelector('#lunbo_left').onclick = function(){
		a--;
		autoPlay();
	}
	for(var i in lunbo_link){
		lunbo_link[i].onclick = function(){
			console.log(this.name)
			autoPlay(this.name-1)
		}
	}


	var date = $('.date');
	console.log(date.length);
	
	function Date1(){
		var d = new Date();
		var f = new Date();
		var x = d.getHours()+1;
		f.setHours(x,0,0);
		t = f.getTime() - d.getTime();
		t = t/1000;
		h = Math.floor(t/3600);
		m = Math.floor(t/60-h*60);
		s = t%60;
		s = s<10?'0'+s:s;
		m = m<10?'0'+m:m;
		h = h<10?'0'+h:h;
		$(".Hours").html(h);
		$(".Minutes").html(m);
		$(".Seconds").html(s);
	}
	setInterval(function(){
		Date1();
	},1000);


	//切换菜单
	var xlcd = document.querySelectorAll('.jd-tow-left>ul>li');
	var xlcd_xlk = document.querySelectorAll('#xlcd_xlk');
	console.log(xlcd);
		for(var i=0;i<xlcd.length;i++){
			xlcd[i].onmouseover = function(){
				for(var j=0;j<xlcd_xlk.length;j++){
					xlcd_xlk[j].className = '';
					if(this == xlcd[j]){
						xlcd_xlk[j].className = 'xlcd_xlk';
						xlcd_xlk[j].onmouseout = function(){
							this.className = '';
							xlcd_xlk[0].className = 'xlcd_xlk';
						}
					}
				}
			}
		}
//change
	$('#change>ul>li').click(function(){
		$('#change>a').html($(this).html());
		$('#change>ul')[0].style.display = "none"
	})
	$('#change').mouseenter(function(){
		$('#change>ul')[0].style.display = "block"
	})