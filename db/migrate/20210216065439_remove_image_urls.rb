class RemoveImageUrls < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :imageUrl
    remove_column :users, :imageUrl
  end
end
