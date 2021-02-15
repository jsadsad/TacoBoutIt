class AddImageUrlAndHours < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :imageUrl, :string
    add_column :businesses, :hours, :string
    add_column :users, :imageUrl, :string
  end
end
