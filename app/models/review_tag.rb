class ReviewTag < ApplicationRecord
    validates :useful, :funny, :cool, inclusion: { in: [true, false] }

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :review,
    foreign_key: :review_id,
    class_name: :Review
end