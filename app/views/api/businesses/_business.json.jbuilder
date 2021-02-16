json.extract! business, :id,
            :name,
            :website,
            :category,
            :address,
            :city,
            :state,
            :zip_code,
            :phone_number,
            :lat,
            :lng

json.indexPicture url_for(business.index_picture) if business.index_picture.attached?

json.pictures business.pictures.map { |photo| url_for(photo) } if business.pictures.attached?
