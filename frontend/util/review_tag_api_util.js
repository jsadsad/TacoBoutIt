export const createTag = (tag) =>
  $.ajax({
    url: '/api/tags',
    method: 'POST',
    data: { tag },
  })

export const fetchTag = (id) =>
  $.ajax({
    url: `/api/tags/${id}`,
    method: 'GET',
  })

export const fetchTags = (review) =>
  $.ajax({
    url: `/api/businesses/${review.businessId}/reviews/${review.id}/tags`,
    method: 'GET',
  })

export const updateTag = (tag) =>
  $.ajax({
    url: `/api/tags/${tag.id}`,
    method: 'PATCH',
    data: { tag },
  })

export const deleteTag = (tagId) =>
  $.ajax({
    url: `/api/tags/${tagId}`,
    method: 'DELETE',
  })
