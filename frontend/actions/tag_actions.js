import * as TagApiUtil from '../util/review_tag_api_util'

export const RECEIVE_TAG = `RECEIVE_TAG`
export const RECEIVE_TAGS = `RECEIVE_TAGS`
export const REMOVE_TAG = `REMOVE_TAG`

const receiveTag = (tag) => {
  return {
    type: RECEIVE_TAG,
    tag,
  }
}

const receiveTags = (tags) => {
  return {
    type: RECEIVE_TAGS,
    tags,
  }
}

const removeTag = (tag) => {
  return {
    type: REMOVE_TAG,
    tagId: tag.id,
  }
}

export const createTag = (tag) => (dispatch) => {
  return TagApiUtil.createTag(tag).then((createdTag) =>
    dispatch(receiveTag(createdTag))
  )
}

export const fetchTag = (id) => (dispatch) => {
  return TagApiUtil.fetchTag(id).then((fetchedTag) =>
    dispatch(receiveTag(fetchedTag))
  )
}

export const fetchTags = (review) => (dispatch) => {
  return TagApiUtil.fetchTags(review).then((tags) =>
    dispatch(receiveTags(tags))
  )
}

export const updateTag = (tag) => (dispatch) => {
  return TagApiUtil.updateTag(tag).then((updatedTag) =>
    dispatch(receiveTag(updatedTag))
  )
}

export const deleteTag = (tagId) => (dispatch) => {
  return TagApiUtil.deleteTag(tagId).then(() => dispatch(removeTag(tagId)))
}
