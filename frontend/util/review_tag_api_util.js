export const createTag = (tag) =>
  $.ajax({
    url: '/api/review_tags',
    method: 'POST',
    data: { tag },
  })

export const fetchTag = (id) =>
  $.ajax({
    url: `/api/review_tags/${id}`,
    method: 'GET',
  })

export const fetchTags = (review) =>
  $.ajax({
    url: `/api/businesses/${review.businessId}/reviews/${review.id}/review_tags`,
    method: 'GET',
  })

export const updateTag = (tag) =>
  $.ajax({
    url: `/api/review_tags/${tag.id}`,
    method: 'PATCH',
    data: { tag },
  })

export const deleteTag = (tagId) =>
  $.ajax({
    url: `/api/review_tags/${tagId}`,
    method: 'DELETE',
  })
