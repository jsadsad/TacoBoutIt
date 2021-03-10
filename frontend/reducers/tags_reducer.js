import { RECEIVE_TAG, RECEIVE_TAGS, REMOVE_TAG } from '../actions/tag_actions'

const tagsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_TAG:
      return Object.assign({}, oldState, { [action.tag.id]: action.tag })
    case RECEIVE_TAGS:
      return action.tags
    case REMOVE_TAG:
      const newState = Object.assign({}, oldState)
      delete newState[action.tagId]
      return newState
  }
}

export default tagsReducer
