class CreateNews < ActiveRecord::Migration
  def change
    create_table :news do |t|
      t.text :tipo, null: false
      t.text :filtro, null: false
      t.text :titulo, null: false
      t.date :fecha, null: false
      t.text :link, null: false
      t.text :fuente, null: false
      t.timestamps null: false
    end
  end
end
