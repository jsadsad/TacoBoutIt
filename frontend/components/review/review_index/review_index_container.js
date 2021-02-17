import { connect } from 'react-redux'
import { fetchReviews, deleteReview } from '../../../actions/review_actions'
import ReviewIndex from './review_index'

const mapStateToProps = (state, ownProps) => {
    return {
        business: Object.values(ownProps),
        reviews: state.entities.reviews ? Object.values(state.entities.reviews) : []
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
        deleteReview: (reviewId) => dispatch => dispatch(deleteReview(reviewId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)


