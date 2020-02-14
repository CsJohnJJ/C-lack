class ChangeIsPrivate < ActiveRecord::Migration[5.2]
  def change
    change_column :channels, :is_private, :string
  end
end
