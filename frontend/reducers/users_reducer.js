import { RECEIVE_USERS } from '../actions/user_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  const nextState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {
        [action.currentUser.id]: action.currentUser,
      })
    case RECEIVE_USERS:
      return action.users
    default:
      return oldState
  }
}

export default usersReducer
