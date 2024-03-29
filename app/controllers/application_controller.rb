class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected
  def after_sign_in_path_for(resource)
    panel_path
    #/(admins)|(acceder)/.match(request.original_fullpath) ? root_path : stored_location_for(:admin)
  end

  def after_sign_out_path_for(resource_or_scope)
    new_admin_session_path
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:usuario, :password, :password_confirmation, :role])
  end
end
