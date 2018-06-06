class AddClaseToFiltros < ActiveRecord::Migration
  def change
    add_column :filtros, :clase, :text
  end
end
