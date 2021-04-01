@reviews.each do |review|
  if current_user
    current_user_tag =
      current_user.tags.select do |tag|
        tag.author_id == current_user.id && review.id == tag.review_id
      end
  end
  num_useful = review.tags.select { |tag| tag.useful == true }.count
  num_funny = review.tags.select { |tag| tag.funny == true }.count
  num_cool = review.tags.select { |tag| tag.cool == true }.count

  json.set! review.id do
    json.currentUserTags current_user_tag
    json.tagCount review.tags
    json.useful num_useful
    json.funny num_funny
    json.cool num_cool
    json.partial! 'api/reviews/review', review: review
  end
end
