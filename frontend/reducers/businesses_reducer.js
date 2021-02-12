import { 
    RECEIVE_BUSINESS, 
    RECEIVE_BUSINESSES
    } from '../actions/business_actions'

const businessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_BUSINESS:
            return action.businesses
        case RECEIVE_BUSINESSES:
            return Object.assign({}, oldState, { [action.business.id]: action.business })
        default:
            return oldState
    }
}

export default businessesReducer