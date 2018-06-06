class CreateSource < ActiveRecord::Migration
  def change
    create_table :sources do |t|
      t.text :fuente, null: false
      t.attachment :imagen
      t.timestamps null: false
    end
  end
end
