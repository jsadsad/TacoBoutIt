json.extract! business,
              :id,
              :name,
              :website,
              :category,
              :address,
              :city,
              :state,
              :zip_code,
              :phone_number,
              :hours,
              :lat,
              :lng

if business.index_picture.attached?
  json.indexPicture url_for(business.index_picture)
end

if business.pictures.attached?
  json.pictures business.pictures.map { |photo| url_for(photo) }
end
