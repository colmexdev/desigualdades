class Noticia < ActiveRecord::Base
  self.table_name = "news"

  validates_presence_of :tipo
  validates_presence_of :titulo
  validates_presence_of :filtro
  validates_presence_of :fecha
  validates_presence_of :link
  validates_presence_of :fuente
end
