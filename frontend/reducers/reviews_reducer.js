import {
    RECEIVE_REVIEW,
    REMOVE_REVIEW
    } from '../actions/review_actions'

import {
    RECEIVE_BUSINESS
} from '..actions/business_actions'

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, { [action.review.id]: action.review })
        case REMOVE_REVIEW:
            const newState = Object.assign({}, oldState)
            delete newState[action.reviewId]
            return newState
        case RECEIVE_BUSINESS:
            return Object.assign({}, oldState, action.reviews)
        default:
            return oldState
    }
}

export default reviewsReducer