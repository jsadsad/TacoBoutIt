class Business < ApplicationRecord
    validates :name, 
        :website, 
        :category, 
        :address, 
        :city, 
        :state, 
        :zip_code,
        :phone_number,
        presence: true
end
