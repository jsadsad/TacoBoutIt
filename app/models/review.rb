class Review < ApplicationRecord
    validates :content,
        :rating,
        :author_id,
        :business_id,
    presence: true

    belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business

end
