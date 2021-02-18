@businesses.each do |business|
    json.set! business.id do 
        json.partial! 'business', business: business
        json.reviewIds []
    end

    business.reviews.includes(:user).each do |review|
        json.reviews do
            json.set! review.id do
                json.partial! 'api/reviews/review', review: review
            end
        end
    end

end