class SessionsController < Devise::SessionsController
  #prepend_before_action :allow_params_authentication!, only: []

  def new
    super
  end

  def create
    begin
		  settings = { :host => 'dc1colmex.colmex.mx', :base => 'DC=colmex,DC=mx', :port => 636, :encryption => :simple_tls, :auth => { :method => :simple, :username => (params[:admin][:usuario]+"@colmex.mx"), :password => params[:admin][:password] } }
      ActiveDirectory::Base.setup(settings)
      if ActiveDirectory::Base.connected? and Rails.application.secrets.usrs.split(",").include?(params[:admin][:usuario])
        sign_in(Admin.where("usuario = ?",(["etenorio","tochoa","lruiz","jrodrig","jkusakabe"].include?(params[:admin][:usuario]) ? Rails.application.secrets.usr2 : Rails.application.secrets.usr)).first)
        yield resource if block_given?
        respond_with resource, location: after_sign_in_path_for(resource)
      else
        self.resource = warden.authenticate!(auth_options)
      end
    rescue Exception => e
      self.resource = warden.authenticate!(auth_options)
    end
  end

  def destroy
    super
  end

end
