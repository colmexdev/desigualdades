var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
function scaleEvents(big,med,small){
	try{
		if(small == ""){
			$("#div_eventos").css("height","0");
		}
		else{
			if(ancho < 785){ document.getElementById("render_eventos").innerHTML = small; }
			else if(ancho < 1150){ document.getElementById("render_eventos").innerHTML = med; }
			else{ document.getElementById("render_eventos").innerHTML = big;}
		}
	}
	catch(err){
	}
}

	function supportedProp(proparray){
		var root=document.documentElement //reference root element of document
		for (var i=0; i<proparray.length; i++){ //loop through possible properties
	    if (proparray[i] in root.style){ //if property exists on element (value will be string, empty string if not set)
	    	return proparray[i] //return that string
	    }
		}
	}

	function slide(side,id,element){
		var hijos = $("#"+id+"-vids")[0].childNodes;
		if(hijos.length < element.dataset.vpv) return true;
		var transition = supportedProp(["MozTransition","WebkitTransition","OTransition","transition"]);
		var width = hijos[1].style.width;
		if(side == "prev"){
			window.getComputedStyle(hijos[hijos.length-1]).width;
			hijos[hijos.length-1].style[transition] = "all 0 ease 0";
			hijos[hijos.length-1].style.width = 0;
			$("#"+id+"-vids")[0].insertBefore(hijos[hijos.length-1],hijos[0]);
			window.getComputedStyle($("#"+id+"-vids")[0].childNodes[0]).width;
			$("#"+id+"-vids")[0].childNodes[0].style[transition] = "width 0.4s linear 0s";
			$("#"+id+"-vids")[0].childNodes[0].style.width = width;
		}
		else{
			window.getComputedStyle(hijos[0]).width;
			hijos[0].style[transition] = "width 0.4s linear 0s";
			hijos[0].style.width = 0;
			setTimeout(function(){
			$("#"+id+"-vids")[0].appendChild(hijos[0]);
			window.getComputedStyle($("#"+id+"-vids")[0].childNodes[hijos.length-1]).width;
				$("#"+id+"-vids")[0].childNodes[hijos.length-1].style[transition] = "all 0 ease 0s";
				$("#"+id+"-vids")[0].childNodes[hijos.length-1].style.width = width;
			},401);
		}
	}

	function trace(cl,id,ind,vid,group){
		var html = '<div class="vid-cont" style="text-align:center;" id="' + cl + '-'+ind+'"><div class="' + 'slide-vid' + '" id="' + id + "-" + ind + '">';
		html += '<a href="https://www.youtube-nocookie.com/embed/' + vid.v_id + '?rel=0&amp;autoplay=1" data-rel="lightcase:' + group + 'Videos">'
		html += '<img src="' + vid.thumbnail.replace("default.jpg","hqdefault.jpg") + '" class="img-responsive" alt="' + vid.titulo.replace('"',"'") + '">'
		html += "</a>"
		return html;
	}

	function renderSlider(sect,parent,wrapper,container,links,cl,id,vpv,prop,resize,group){
		if(!resize) container.html("");
		else{
			$("#"+sect+"-left").css("visibility",(links.length <= vpv ? 'hidden' : ''));
			$("#"+sect+"-right").css("visibility",(links.length <= vpv ? 'hidden' : ''));
		}
		$("#"+sect+"-left")[0].dataset.vpv=vpv;
		$("#"+sect+"-right")[0].dataset.vpv=vpv;
		for(var i = 0; i < links.length; i++){
			if(!resize) container.html(container.html() + trace(cl,id,i,links[i],group));
			$("#"+cl+"-"+i).css({'width': wrapper.width()/vpv});
			$("#"+id+"-"+i).css('width',wrapper.width()*prop);
			//Contenido de los sliders
			$("#"+id+"-"+i+" img").css("width",wrapper.width()*prop).css("height",wrapper.width()*prop*5/7);
			if(!resize && i>vpv && i==links.length-1){
				container[0].insertBefore(container[0].childNodes[links.length-1],container[0].childNodes[0]);
			}
		}
		parent.css("height",wrapper.width()*prop*5/7);
		container.width(links.length * wrapper.width()/vpv).css("left",(links.length <= vpv ? (wrapper.width()*0.5*(1-(links.length/vpv))) : (wrapper.width()/vpv*(-1))));
		$('a[data-rel^=lightcase]').lightcase();
	}

	function drawSlider(parent,links,id,vpv){
		var html = "";
		html += '<div class="contain" id="'+id+'-container">';
		
			html += '<div class="left" id="'+id+'-left"' + (links <= vpv ? ' style="visibility:hidden;"' : '') + '>';
			html += '<div class="link-l" id="'+id+'-link-l" style="display:table;">';
			html += '<i class="fa fa-chevron-left" aria-hidden="true" style="display:table-cell;color:#993366;text-shadow:none;vertical-align:middle;font-size:26px;"' + ' onclick="slide('+"'prev','"+id+"',this"+');"' + '></i>';
			html += '</div>';
			html += '</div>';	
		
		html += '<div class="cont" id="'+id+'-cont">';
		html += '<div class="vids" id="'+id+'-vids">';
		html += '</div>';
		html += '</div>';
		
			html += '<div class="right" id="'+id+'-right"' + (links <= vpv ? ' style="visibility:hidden;"' : '') + '>';
			html += '<div class="link-r" id="'+id+'-link-r" style="display:table;">';
			html += '<i class="fa fa-chevron-right" aria-hidden="true" style="display:table-cell;color:#993366;text-shadow:none;vertical-align:middle;font-size:26px;"' + ' onclick="slide('+"'next','"+id+"',this"+ ');"' + '></i>';
			html += '</div>';
			html += '</div>';
		
		html += '</div>';
		parent.html(html);
	}



function listo(){
	$("#script-twitter").remove();
	if(window.location.pathname == "/"){
		$("head").append('<script id="script-twitter" async type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>');		
	} else if(window.location.pathname == "/informe2018"){
		$.ajax({
			url: "https://coed.colmex.mx/catalogo_videos.json?id=HC7ikRzoDaM",
			success: function(result){
				var html = '<a href="https://www.youtube-nocookie.com/embed/' + result["vids"][0]["v_id"] + '?rel=0&amp;autoplay=1" data-rel="lightcase:documentales"><img src="' + result["vids"][0]["thumbnail"].replace("default.jpg","hqdefault.jpg") + '" alt="' + result["vids"][0]["titulo"] + '" class="img-responsive vid-clip"></a>'
				$("#vid-inf").html(html);
				$('a[data-rel^=lightcase]').lightcase();
			}
		}).done(function(){
			$.ajax({
				url: "https://coed.colmex.mx/catalogo_videos.json?titulo=Informe%20Desigualdades%20en%20M%C3%A9xico%202018.%20Dos%20historias%20de%20vida",
				method: "get",
				dataType: "JSON",
				success: function(result){
					var html = '<a href="https://www.youtube-nocookie.com/embed/' + result["vids"][0]["v_id"] + '?rel=0&amp;autoplay=1" data-rel="lightcase:informeVideos"><img src="' + result["vids"][0]["thumbnail"].replace("default.jpg","hqdefault.jpg") + '" alt="' + result["vids"][0]["titulo"] + '" class="img-responsive vid-clip"></a>'
					$("#vid-historias").html(html);
					$('a[data-rel^=lightcase]').lightcase();
				}
			});
		}).done(function(){
			$.ajax({
				url: "https://coed.colmex.mx/catalogo_videos.json?id=sGGd4Bv6_nA",
				method: "get",
				dataType: "JSON",
				success: function(result){
					var html = '<a href="https://www.youtube-nocookie.com/embed/' + result["vids"][0]["v_id"] + '?rel=0&amp;autoplay=1" data-rel="lightcase:documentales"><img src="' + result["vids"][0]["thumbnail"].replace("default.jpg","hqdefault.jpg") + '" alt="' + result["vids"][0]["titulo"] + '" class="img-responsive vid-clip"></a>'
					$("#vid-doc2").html(html);
					$('a[data-rel^=lightcase]').lightcase();
				}
			});
		}).done(function(){
			$.ajax({
				url: "https://coed.colmex.mx/catalogo_videos.json?titulo=Desigualdades%20en%20M%C3%A9xico%202018.%20Entrecruzamiento%20y%20acumulaci%C3%B3n%20de%20desventajas",
				method: "get",
				dataType: "JSON",
				success: function(result){
					var html = '<a href="https://www.youtube-nocookie.com/embed/' + result["vids"][0]["v_id"] + '?rel=0&amp;autoplay=1" data-rel="lightcase:informeVideos"><img src="' + result["vids"][0]["thumbnail"].replace("default.jpg","hqdefault.jpg") + '" alt="' + result["vids"][0]["titulo"] + '" class="img-responsive vid-clip"></a>'
					$("#vid-talk").html(html);
					$('a[data-rel^=lightcase]').lightcase();
				}
			});
		}).done(function(){
			$.ajax({
				url: "https://coed.colmex.mx/catalogo_videos.json?titulo=Lanzamiento%20del%20informe%20Desigualdades%20en%20M%C3%A9xico%202018",
				method: "get",
				dataType: "JSON",
				success: function(result){
					var html = '<a href="https://www.youtube-nocookie.com/embed/' + result["vids"][0]["v_id"] + '?rel=0&amp;autoplay=1" data-rel="lightcase:informeVideos"><img src="' + result["vids"][0]["thumbnail"].replace("default.jpg","hqdefault.jpg") + '" alt="' + result["vids"][0]["titulo"] + '" class="img-responsive vid-clip"></a>'
					$("#vid-stream").html(html);
					$('a[data-rel^=lightcase]').lightcase();
				}
			});
		}).done(function(){
			$.ajax({
				url: 'https://coed.colmex.mx/catalogo_videos.json?lista=Informe%20%22Desigualdades%20en%20M%C3%A9xico%202018%22&tags=Lanzamiento%20Informe',
				method: 'get',
				dataType: 'JSON',
				success: function(result){
					var html = '';
					for(var i=0; i < result["vids"].length; i++){
						html = html + '<div class="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">' + '<div class="gallery-img">' + '<div class="sinlge-photo">' + '<div class="single-photo-inner"> <a href="https://www.youtube-nocookie.com/embed/' + result['vids'][i]['v_id'] + '?rel=0&amp;autoplay=1" data-rel="lightcase:lanzamientoVideos"> <img src="' + result['vids'][i]['thumbnail'].replace('default.jpg','hqdefault.jpg') + '" alt="' + result['vids'][i]['titulo'] +'" class="img-responsive vid-clip"> </a> </div>' + '</div></div></div>';
					}
					$("#vids-pres").html(html);
					$('a[data-rel^=lightcase]').lightcase();
				}
			});
		}).done(function(){
			isotopeMedios();
			$("head").append('<script id="script-twitter" async type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>');
		});

	} else if(window.location.pathname == "/videos"){
		$.ajax({
			method: 'get',
			dataType: 'JSON',
			url: 'https://coed.colmex.mx/catalogo_videos.json?lista=Seminario%20sobre%20Trabajo%20y%20Desigualdades&all=true&crono=desc',
			success: function(result){
				var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
				window.trades_vids = result;
				drawSlider($("#trades-slider"),result["vids"].length,"trades",3)
				renderSlider("trades",$("#trades-container"),$("#trades-cont"),$("#trades-vids"),result["vids"],"trades-vid-cont","trades-slide-vid",(ancho < 792 ? 2 : 3),(ancho < 792 ? 0.4 : 0.3),false,"trades");

		$.ajax({
			method: 'get',
			dataType: 'JSON',
			url: 'https://coed.colmex.mx/catalogo_videos.json?lista=Seminario%20Migraci%C3%B3n,%20Desigualdad%20y%20Pol%C3%ADticas%20P%C3%BAblicas&all=true&crono=desc',
			success: function(result){
				var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
				window.migdep_vids = result;
				drawSlider($("#migdep-slider"),result["vids"],"migdep",3)
				renderSlider("migdep",$("#migdep-container"),$("#migdep-cont"),$("#migdep-vids"),result["vids"],"migdep-vid-cont","migdep-slide-vid",(ancho < 792 ? 2 : 3),(ancho < 792 ? 0.4 : 0.3),false,"migdep");

				$.ajax({
					method: 'get',
					dataType: 'JSON',
					url: 'https://coed.colmex.mx/catalogo_videos.json?lista=Seminario%20sobre%20Desigualdad%20Socioecon%C3%B3mica%20y%20Educativa&all=true&crono=desc',
					success: function(result){
						var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
						window.sedes_vids = result;
						drawSlider($("#sedes-slider"),result["vids"],"sedes",3)
						renderSlider("sedes",$("#sedes-container"),$("#sedes-cont"),$("#sedes-vids"),result["vids"],"sedes-vid-cont","sedes-slide-vid",(ancho < 792 ? 2 : 3),(ancho < 792 ? 0.4 : 0.3),false,"sedes");

						$(window).on("resize",function(){
							if(window.location.pathname == "/videos"){
								var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
								renderSlider("sedes",$("#sedes-container"),$("#sedes-cont"),$("#sedes-vids"),result["vids"],"sedes-vid-cont","sedes-slide-vid",(ancho >= 792 ? 3 : (ancho >= 545 ? 2 : 1)),(ancho >= 792 ? 0.3 : (ancho >= 545 ? 0.4 : 0.47)),true,"sedes");
							}
						});
					}
				});

					$(window).on("resize",function(){
						if(window.location.pathname == "/videos"){
							var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
							renderSlider("migdep",$("#migdep-container"),$("#migdep-cont"),$("#migdep-vids"),result["vids"],"migdep-vid-cont","migdep-slide-vid",(ancho >= 792 ? 3 : (ancho >= 545 ? 2 : 1)),(ancho >= 792 ? 0.3 : (ancho >= 545 ? 0.4 : 0.47)),true,"migdep");
						}
					});
				}
			});

				$(window).on("resize",function(){
					if(window.location.pathname == "/videos"){
						var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
						renderSlider("trades",$("#trades-container"),$("#trades-cont"),$("#trades-vids"),result["vids"],"trades-vid-cont","trades-slide-vid",(ancho >= 792 ? 3 : (ancho >= 545 ? 2 : 1)),(ancho >= 792 ? 0.3 : (ancho >= 545 ? 0.4 : 0.47)),true,"trades");
					}
				});
			}
		});

	}
}

$(window).on("resize",function(){
		setTimeout(function(){
			lightcase.resize();
		},300);
		if(window.location.pathname == "/informe2018"){
			isotopeMedios();
		}
});
