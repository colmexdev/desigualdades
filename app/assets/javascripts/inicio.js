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
		html += '<div class="gallery-img"><div class="sinlge-photo"><div class="single-photo-inner">'
		html += '<a href="https://www.youtube-nocookie.com/embed/' + vid.v_id + '?rel=0&amp;autoplay=1" data-rel="lightcase:' + group + 'Vids">'
		html += '<img src="' + vid.thumbnail.replace("default.jpg","hqdefault.jpg") + '" class="img-responsive">'
		html += "</a>"
		html += "</div></div></div>"
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
			$("#"+id+"-"+i+" iframe").attr("width",wrapper.width()*prop).attr("height",wrapper.width()*prop*5/7);
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
