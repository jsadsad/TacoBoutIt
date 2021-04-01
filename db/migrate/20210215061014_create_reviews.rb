class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :content, null: false
      t.integer :rating, null: false
      t.integer :author_id, foreign_key: true, null: false
      t.integer :business_id, foreign_key: true, null: false

      t.timestamps
    end
    add_index :reviews, %i[author_id business_id], unique: true
  end
end
