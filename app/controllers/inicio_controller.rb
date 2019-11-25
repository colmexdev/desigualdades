class InicioController < ApplicationController
  include InicioHelper

  def inicio
    I18n.locale = :es
    begin
      cliente = TinyTds::Client.new username: 'agendaPRED', password: '@g3NDa#', host: '172.16.40.220', port: '1433'
      @resultado = cliente.execute("USE Agenda")
      @resultado.do
      @resultado = cliente.execute("SELECT * FROM dbo.vw_EventosDesigualdades LIMIT 15 ORDER BY PARSE(fechaInicio AS DATE USING 'es-ES') ASC, horaInicio ASC")
      @ev_big, @ev_small, @ev_tiny = construye_slider_eventos(@resultado)
    rescue => e
      @ev_big, @ev_small, @ev_tiny = "", "" ,""
    end

    respond_to do |format|
      format.html
      format.json { render json: {ev_big: @ev_big, ev_med: @ev_small, ev_small: @ev_tiny}}
    end
  end

  def red
  end

  def publicaciones
  end

  def seminarios
  end

  def videos
  end

  def informe
    @noticias = Noticia.all.order(fecha: :desc, created_at: :desc)
    @filtros = Filtro.all
  end

  def inequalities
    @title = "Inequalities in Mexico 2018"
    @imagen_pauta = "inequalities-fb.jpg"
    @imagen_menu = "logo-red-eng.png"
  end

  def pdf_informe
    @title = "Informe de Desigualdades en México 2018"
    @imagen_pauta = "portada-informe.jpg"
  end
end
