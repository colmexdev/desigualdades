module InicioHelper

  def construye_slider_eventos(sliders)
    bloque_html, bloque_opt_html, bloque_tiny_html = "", "", ""
    if sliders == 0
      return bloque_html, bloque_opt_html, bloque_tiny_html
    end
    slides = (sliders.each.length / 4).ceil
    j = 0
    primer_item = true;
    if sliders.each.length % 4 != 0
      slides = slides + 1
    end
    for i in 1..slides
      k = 1
			if j >= sliders.each.length
				break
			end
      bloque_html = bloque_html + '<div class=' + (i==1 ? '"item active"' : '"item"') + '>' 
      bloque_opt_html = bloque_opt_html + '<div class=' + (i==1 ? '"item active"' : '"item"') + '>'
      while k % 5 != 0
				if j >= sliders.each.length
					break
				end
        bloque_html = bloque_html + '<div class="evento">'
        if k % 3 == 0
          bloque_opt_html = bloque_opt_html + '</div><div class="item">'
        end
        bloque_opt_html = bloque_opt_html + '<div class="evento">'
        bloque_tiny_html = bloque_tiny_html + '<div class=' + (primer_item ? '"item active"' : '"item"') + '><div class="evento">'
        primer_item = false;
        if j < sliders.each.length
          fila = sliders.each[j]
          bloque_html = bloque_html + construirEvento(fila)
          bloque_opt_html = bloque_opt_html + construirEvento(fila)
          bloque_tiny_html = bloque_tiny_html + construirEvento(fila, true)
        end
        bloque_html = bloque_html + '</div>'
        bloque_opt_html = bloque_opt_html + '</div>'
        bloque_tiny_html = bloque_tiny_html + '</div></div>'
        k = k + 1
        j = j + 1
      end
      bloque_html = bloque_html + '</div>'
      bloque_opt_html = bloque_opt_html + '</div>'
    end
    return bloque_html, bloque_opt_html, bloque_tiny_html
  end

  def construirEvento(fila, chico = false)
    centros = ['ceaa', 'cedua', 'cee', 'ceh', 'cei', 'cell', 'ces', 'colmex', 'bdcv', 'piem']
    bloque_html = '<div class="img_evento">'
    bloque_html = bloque_html + ( centros.include?(fila["centroSiglas"].mb_chars.downcase) ? ActionController::Base.helpers.image_tag(fila["centroSiglas"].mb_chars.downcase + ".png", :class => "img_sede") : '') + "</div>"

    bloque_html = bloque_html + '<div class="desc_evento">'

    bloque_html = bloque_html + '<div class="tipo_evento"><p>' + fila["tipoActividad"].to_s + "</p></div>"
    bloque_html = bloque_html + '<div class="titulo_evento"><p>' + fila["tituloActividad"].to_s + (fila["subtituloActividad"].to_s != "" ? (": " + fila["subtituloActividad"].to_s) : "") + "</p></div>"

    bloque_html = bloque_html + '<div class="lugar_fecha_evento">'
    bloque_html = bloque_html + '<div class="cal">' + ActionController::Base.helpers.image_tag("calendario.png", :class => "img_cal") + '</div>'
    bloque_html = bloque_html + '<div class="datos_evento"><p>'
    bloque_html = bloque_html + arregloFecha(fila["fechaInicio"], fila["fechaFin"], chico) + "<br>"
    bloque_html = bloque_html + l(Time.parse(fila["horaInicio"]), format: "%H:%M") + " | " + l(Time.parse(fila["horaFin"]), format: "%H:%M") + "<br>"
    bloque_html = bloque_html + fila["sede"].to_s + ', 
<br><span>' + fila["institucionSede"].to_s + "</span></p></div></div>"

    bloque_html = bloque_html + '<div class="liga_evento"><a href="'+fila["liga"].to_s+'" class="liga_evento" target="_blank">' + "Más información" + ' +' + '</a></div>'

    bloque_html = bloque_html + "</div>"
    return bloque_html
  end

  def arregloFecha(fechaI, fechaF, chico)
    diferencia = Date.strptime(fechaI,"%d/%m/%Y") - Date.strptime(fechaF,"%d/%m/%Y")
    if diferencia == 0
      return l(Date.strptime(fechaI,"%d/%m/%Y"), format: (chico ? :short : :long))
    else
      return l(Date.strptime(fechaI,"%d/%m/%Y"), format: (chico ? :short : :long)) + "<br>" + l(Date.strptime(fechaF,"%d/%m/%Y"), format: (chico ? :short : :long))
    end
  end

end
