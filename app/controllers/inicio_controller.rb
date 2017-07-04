class InicioController < ApplicationController
  include InicioHelper

  def inicio
    begin
      cliente = TinyTds::Client.new username: 'agendaPRED', password: '@g3NDa#', host: '172.16.40.220', port: '1433'
      @resultado = cliente.execute("USE Agenda")
      @resultado.do
      @resultado = cliente.execute("SELECT * FROM dbo.vw_EventosDesigualdades  ORDER BY PARSE(fechaInicio AS DATE USING 'es-ES') ASC, horaInicio ASC")
			logger.debug("Algo")
      @ev_big, @ev_small, @ev_tiny = construye_slider_eventos(@resultado)
			logger.debug("Algo más")
    rescue => e
      logger.debug e.message
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
end
