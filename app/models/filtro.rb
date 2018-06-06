class Filtro < ActiveRecord::Base
  self.table_name = "filtros"

  validates_presence_of :filtro
  validates_presence_of :clase
end
