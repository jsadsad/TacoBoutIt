@tags.each do |tag|
  json.set! tag.id do
    json.id tag.id
    json.authorId tag.author_id
    json.reviewId tag.review_id
    json.useful tag.useful
    json.funny tag.funny
    json.cool tag.cool
  end
end
