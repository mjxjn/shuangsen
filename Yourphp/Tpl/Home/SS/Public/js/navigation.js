	//缃戠珯鍦板浘鏀剁缉灞曞紑
	var web_map_btn = document.getElementById("web_map_btn");
	var web_map_bg = document.getElementById("web_map_bg");
	var timer = null;
	
	web_map_btn.onclick = function(){
		
		if(web_map_bg.offsetHeight <= 0){
			
			web_map_bg.style.cssText="height:0;display:block";
			timer = setInterval(function(){
				web_map_bg.style.height = parseInt(web_map_bg.style.height.replace("px",""))+30+"px";
				web_map_btn.className = "web_map_btn_show";
				if(web_map_bg.offsetHeight>190){
					web_map_bg.style.height = "190px";
					web_map_btn.style.cssText = "top:1px;_top:2px;"
					scroll(0,document.body.scrollHeight);
					clearInterval(timer);
				}
				scroll(0,document.body.scrollHeight);
			},10)
		}else{
			timer = setInterval(function(){
				web_map_bg.style.height = parseInt(web_map_bg.style.height.replace("px",""))-30+"px";
				web_map_btn.className = "web_map_btn_hide";
				if(web_map_bg.offsetHeight<20){
					web_map_bg.style.cssText = "height:0; display:none;";
					web_map_btn.style.cssText = ""
					clearInterval(timer);
				}
			},10)
		}
	}
	
	
	function set_state(){
		var state_exp = /\w+/;
		var state_catalog = state_exp.exec(window.location.pathname).toString();
		var li = document.getElementById(state_catalog+"_column");
		var ul = document.getElementById(state_catalog+"_nav");
		if(ul){var a = ul.getElementsByTagName("a");}
		
		
		li&&(li.className = "sel");
		ul&&(ul.style.display = "block");
		
		if(ul){	
			for(var i=0;i<a.length;i++){
				if(a[i].getAttribute("href").indexOf(window.location.pathname)>-1){
					a[i].className = "orange";
				}else if(("/corp/yyf.shtml/corp/hexiaopeng.shtml/corp/liangjie.shtml/corp/zhushunyan.shtml/corp/chenshi.shtml/corp/weidong.shtml/corp/wangtong.shtml/corp/liujungu.shtml/corp/liuzhonghua.shtml/corp/roy.shtml").indexOf(window.location.pathname)>-1){
					a[3].className="orange";
				}
				else if(("/corp/corp_gk.shtml/corp/corp_cp.shtml/corp/corp_qj.shtml/corp/corp_zr.shtml/corp/corp_hb.shtml/corp/corp_mb.shtml/corp/corp_qk.shtml/corp/corp_lx.shtml/corp/corp_sm.shtml").indexOf(window.location.pathname)>-1){
					a[1].className="orange";
				}
				else if(("/product/app_hz.shtml/product/app_lc.shtml/product/app_gf.shtml/product/app_info.shtml/product/app_note.shtml/product/app_contact.shtml").indexOf(window.location.pathname)>-1){
					a[12].className="orange";
				}
				else if(("/business/developer2.shtml").indexOf(window.location.pathname)>-1){
					a[5].className="orange";
				}
				
			}
		}
	}
	
	function set_footerbg(){
		var win_space = document.documentElement.clientHeight -	document.documentElement.offsetHeight;
		if(win_space>0){
				document.getElementById("footerbg").style.marginTop = (win_space+25)+"px";
		}
	}

	set_state();
	set_footerbg();