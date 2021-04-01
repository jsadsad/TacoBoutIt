json.partial! '/api/businesses/business', business: @business

@business
  .reviews
  .includes(:user)
  .each do |review|
    json.reviews do
      json.set! review.id do
        json.partial! 'api/reviews/review', review: review
      end
    end

    json.users do
      json.set! review.author_id do
        json.extract! review.user, :id, :first_name, :last_name
      end
    end
  end
