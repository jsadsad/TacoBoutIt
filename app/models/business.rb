class Business < ApplicationRecord
  validates :name,
            :category,
            :address,
            :city,
            :state,
            :zip_code,
            :phone_number,
            presence: true

  has_many :reviews, foreign_key: :business_id, class_name: :Review

  has_one_attached :index_picture
  has_many_attached :pictures
end
