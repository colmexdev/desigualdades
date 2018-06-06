class CreateFiltros < ActiveRecord::Migration
  def change
    create_table :filtros do |t|
      t.text :filtro, null: false
      t.timestamps null: false
    end
  end
end
