class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :name, null: false
      t.text :description
      t.integer :admin_id, null: false
      t.boolean :is_private, null: false

      t.timestamps
    end
    add_index :messages, :admin_id
  end
end

