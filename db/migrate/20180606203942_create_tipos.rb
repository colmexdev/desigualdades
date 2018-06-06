class CreateTipos < ActiveRecord::Migration
  def change
    create_table :tipos do |t|
      t.text :tipo, null: false
      t.timestamps null: false
    end
  end
end
