import { RECEIVE_TAG, RECEIVE_TAGS, REMOVE_TAG } from '../actions/tag_actions'

const tagsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_TAG:
      newState[action.tag.id] = action.tag
      return newState
    case RECEIVE_TAGS:
      return Object.assign(newState, action.tags)
    default:
      return state
  }
}

export default tagsReducer
