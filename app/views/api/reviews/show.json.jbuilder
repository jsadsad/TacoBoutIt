json.review { json.partial! '/api/reviews/review', review: @review }

json.user { json.partial! '/api/users/user', user: @review.user }
