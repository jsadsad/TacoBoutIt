import { connect } from 'react-redux'
import { fetchReviews, deleteReview } from '../../../actions/review_actions'
import ReviewItem from './review_item'

const mapStateToProps = (state) => {
  return {
    reviews: Object.values(state.entities.reviews),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (review) => dispatch(deleteReview(review)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem)
