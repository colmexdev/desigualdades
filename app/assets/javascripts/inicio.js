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
