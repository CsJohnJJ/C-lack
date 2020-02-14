class CreateDms < ActiveRecord::Migration[5.2]
  def change
    create_table :dms do |t|

      t.timestamps
    end
  end
end
