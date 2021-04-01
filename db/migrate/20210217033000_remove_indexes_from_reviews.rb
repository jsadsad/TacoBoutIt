class RemoveIndexesFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, column: %i[author_id business_id]
  end
end
