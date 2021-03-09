class CreateReviewTags < ActiveRecord::Migration[5.2]
  def change
    create_table :review_tags do |t|
      t.integer :author_id, foreign_key: true, null: false
      t.integer :review_id, foreign_key: true, null: false
      t.boolean  :useful, default: false, null: false
      t.boolean  :funny, default: false, null: false
      t.boolean  :cool, default: false, null: false
      t.timestamps
    end
    add_index :review_tags, :review_id
  end
end
