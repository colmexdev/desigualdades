class Tipo < ActiveRecord::Base
  self.table_name = "tipos"

  validates_presence_of :tipo
end
