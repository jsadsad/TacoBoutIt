class Review < ApplicationRecord
    validates :author_id, :business_id, presence: true

    validates :content, presence: { message: "To submit your review, please explain your rating to others." }
    validates :rating, :inclusion => { :in => (1..5).to_a, :message => "Rating must be between 1 to 5."}

    belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business

    has_many :tags,
    foreign_key: :review_id,
    class_name: :ReviewTag

end
