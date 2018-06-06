class Medio < ActiveRecord::Base
  self.table_name = "sources"

  validates_presence_of :fuente
  has_attached_file :imagen, :styles => {},
                    :url => "/assets/medios/:id/:style/:basename.:extension",
                    :path => ":rails_root/public/assets/medios/:id/:style/:basename.:extension",
                    :default_url => "/vacio.png"

  validates_attachment_presence :imagen
  validates_attachment_content_type :imagen, content_type: /\Aimage/
end
