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
		//html += '<iframe src="' + link + '" allowfullscreen></iframe></div></div>';
		//html += '<div class="gallery-image"><div class="sinlge-photo"><div class="single-photo-inner">'
		html += '<a href="https://www.youtube-nocookie.com/embed/' + vid.v_id + '?rel=0&amp;autoplay=1" data-rel="lightcase:' + group + 'Videos">'
		html += '<img src="' + vid.thumbnail.replace("default.jpg","hqdefault.jpg") + '" class="img-responsive" alt="' + vid.titulo.replace('"',"'") + '">'
		html += "</a>"
		//html += "</div></div></div>"
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

$(document).on("ready page:load", function(){
	if(window.location.pathname == "/informe2018"){

		$(window).on("resize",function(){
				// init Isotope
						var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
						var $gellary_img = $('.all-gallery-items').isotope({
							masonry: {
								columnWidth: $(".all-gallery-items").width()/(ancho >= 1200 ? 3 : (ancho >= 680 ? 2 : 1))
							},
							itemSelector: '.single-item',
							percentPosition: true,
							transitionDuration: '0.8s',
							getSortData: {
							name: '.name',
							symbol: '.symbol',
							number: '.number parseInt',
							category: '[data-category]',
							weight: function( itemElem ) {
								var weight = $( itemElem ).find('.weight').text();
								return parseFloat( weight.replace( /[\(\)]/g, '') );
							}
							}
						});  

						$(".single-item").width($(".all-gallery-items").width()/(ancho >= 1200 ? 3 : (ancho >= 680 ? 2 : 1))).css({"margin-bottom":"20px"});     
						
						// filter functions
						var filterFns = {
							// show if number is greater than 50
							numberGreaterThan50: function() {
							var number = $(this).find('.number').text();
							return parseInt( number, 10 ) > 50;
							},
							// show if name ends with -ium
							ium: function() {
							var name = $(this).find('.name').text();
							return name.match( /ium$/ );
							}
						};
						
						// bind filter button click
						$('.gallery-menu ul').on( 'click', 'li', function() {
							var filterValue = $( this ).attr('data-filter');
							// use filterFn if matches value
							filterValue = filterFns[ filterValue ] || filterValue;
							$gellary_img.isotope({ filter: filterValue });
						});            

						// Isotop for four grid     
						var $gellary_img_4 = $('.gallery-grid-4').isotope({
							itemSelector: '.single-item-4',
							transitionDuration: '0.8s',
							getSortData: {
							name: '.name',
							symbol: '.symbol',
							number: '.number parseInt',
							category: '[data-category]',
							weight: function( itemElem ) {
								var weight = $( itemElem ).find('.weight').text();
								return parseFloat( weight.replace( /[\(\)]/g, '') );
							}
							}
						}); 
						// bind filter button click
						$('.gallery-menu ul').on( 'click', 'li', function() {
							var filterValue = $( this ).attr('data-filter');
							// use filterFn if matches value
							filterValue = filterFns[ filterValue ] || filterValue;
							$gellary_img_4.isotope({ filter: filterValue });
						});
					
						// change is-checked class on buttons
						$('.gallery-menu ul').each( function( i, liList ) {
							var $liList = $( liList );
							$liList.on( 'click', 'li', function() {
							$liList.find('.is_selected').removeClass('is_selected');
							$( this ).addClass('is_selected');
							});
						});
		});

		$.ajax({
			url: "http://pred1.colmex.mx/catalogo_videos.json?titulo=Informe%20Desigualdades%20en%20M%C3%A9xico%202018.%20Dos%20historias%20de%20vida.",
			method: "get",
			dataType: "JSON",
			success: function(result){
				var html = '<a href="https://www.youtube-nocookie.com/embed/' + result["vids"][0]["v_id"] + '?rel=0&amp;autoplay=1" data-rel="lightcase:grupoUnoVideos"><img src="' + result["vids"][0]["thumbnail"].replace("default.jpg","hqdefault.jpg") + '" alt="' + result["vids"][0]["titulo"] + '" class="img-responsive"></a>'
				$("#vid-historias").html(html);
			}
		});

		$.ajax({
			url: "http://pred1.colmex.mx/catalogo_videos.json?titulo=Desigualdades%20en%20M%C3%A9xico%202018.%20Entrecruzamiento%20y%20acumulaci%C3%B3n%20de%20desventajas",
			method: "get",
			dataType: "JSON",
			success: function(result){
				var html = '<a href="https://www.youtube-nocookie.com/embed/' + result["vids"][0]["v_id"] + '?rel=0&amp;autoplay=1" data-rel="lightcase:grupoUnoVideos"><img src="' + result["vids"][0]["thumbnail"].replace("default.jpg","hqdefault.jpg") + '" alt="' + result["vids"][0]["titulo"] + '" class="img-responsive"></a>'
				$("#vid-talk").html(html);
			}
		});

		$.ajax({
			url: "http://pred1.colmex.mx/catalogo_videos.json?titulo=Lanzamiento%20del%20informe%20Desigualdades%20en%20M%C3%A9xico%202018",
			method: "get",
			dataType: "JSON",
			success: function(result){
				var html = '<a href="https://www.youtube-nocookie.com/embed/' + result["vids"][0]["v_id"] + '?rel=0&amp;autoplay=1" data-rel="lightcase:grupoUnoVideos"><img src="' + result["vids"][0]["thumbnail"].replace("default.jpg","hqdefault.jpg") + '" alt="' + result["vids"][0]["titulo"] + '" class="img-responsive"></a>'
				$("#vid-stream").html(html);
			}
		});

	} else if(window.location.pathname == "/videos"){

		$.ajax({
			method: 'get',
			dataType: 'JSON',
			url: 'http://pred1.colmex.mx/catalogo_videos.json?lista=Seminario%20sobre%20Trabajo%20y%20Desigualdades&all=true&crono=desc',
			success: function(result){
				var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
				window.trades_vids = result;
				drawSlider($("#trades-slider"),result["vids"].length,"trades",3)
				renderSlider("trades",$("#trades-container"),$("#trades-cont"),$("#trades-vids"),result["vids"],"trades-vid-cont","trades-slide-vid",(ancho < 792 ? 2 : 3),(ancho < 792 ? 0.4 : 0.3),false,"trades");

		$.ajax({
			method: 'get',
			dataType: 'JSON',
			url: 'http://pred1.colmex.mx/catalogo_videos.json?lista=Seminario%20Migraci%C3%B3n,%20Desigualdad%20y%20Pol%C3%ADticas%20P%C3%BAblicas&all=true&crono=desc',
			success: function(result){
				var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
				window.migdep_vids = result;
				drawSlider($("#migdep-slider"),result["vids"],"migdep",3)
				renderSlider("migdep",$("#migdep-container"),$("#migdep-cont"),$("#migdep-vids"),result["vids"],"migdep-vid-cont","migdep-slide-vid",(ancho < 792 ? 2 : 3),(ancho < 792 ? 0.4 : 0.3),false,"migdep");

				$.ajax({
					method: 'get',
					dataType: 'JSON',
					url: 'http://pred1.colmex.mx/catalogo_videos.json?lista=Seminario%20sobre%20Desigualdad%20Socioecon%C3%B3mica%20y%20Educativa&all=true&crono=desc',
					success: function(result){
						var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
						window.sedes_vids = result;
						drawSlider($("#sedes-slider"),result["vids"],"sedes",3)
						renderSlider("sedes",$("#sedes-container"),$("#sedes-cont"),$("#sedes-vids"),result["vids"],"sedes-vid-cont","sedes-slide-vid",(ancho < 792 ? 2 : 3),(ancho < 792 ? 0.4 : 0.3),false,"sedes");

						$(window).on("resize",function(){
							var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
							renderSlider("sedes",$("#sedes-container"),$("#sedes-cont"),$("#sedes-vids"),result["vids"],"sedes-vid-cont","sedes-slide-vid",(ancho >= 792 ? 3 : (ancho >= 545 ? 2 : 1)),(ancho >= 792 ? 0.3 : (ancho >= 545 ? 0.4 : 0.47)),true,"sedes");
						});

					$(document).ready(function($) {
						$('a[data-rel^=lightcase]').lightcase();
					});

					}
				});

					$(window).on("resize",function(){
								var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
								renderSlider("migdep",$("#migdep-container"),$("#migdep-cont"),$("#migdep-vids"),result["vids"],"migdep-vid-cont","migdep-slide-vid",(ancho >= 792 ? 3 : (ancho >= 545 ? 2 : 1)),(ancho >= 792 ? 0.3 : (ancho >= 545 ? 0.4 : 0.47)),true,"migdep");
					});

					$(document).ready(function($) {
						$('a[data-rel^=lightcase]').lightcase();
					});

				}
			});

				$(window).on("resize",function(){
							var ancho = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
							renderSlider("trades",$("#trades-container"),$("#trades-cont"),$("#trades-vids"),result["vids"],"trades-vid-cont","trades-slide-vid",(ancho >= 792 ? 3 : (ancho >= 545 ? 2 : 1)),(ancho >= 792 ? 0.3 : (ancho >= 545 ? 0.4 : 0.47)),true,"trades");
				});

				$(document).ready(function($) {
					$('a[data-rel^=lightcase]').lightcase();
				});

			}
		});

	}

				$(document).ready(function($) {
					$('a[data-rel^=lightcase]').lightcase();
				});
});
