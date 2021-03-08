import { connect } from 'react-redux'
import { fetchReviews, deleteReview } from '../../../actions/review_actions'
import ReviewItem from './review_item'

const mapStateToProps = (state) => {
  return {
    reviewers: state.entities.businesses,
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (review) => dispatch(deleteReview(review)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem)
