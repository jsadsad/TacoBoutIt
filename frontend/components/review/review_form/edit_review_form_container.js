import { connect } from 'react-redux'
import { updateReview, fetchReviews } from '../../../actions/review_actions'
import { fetchBusiness } from '../../../actions/business_actions'
import EditFormReview from './edit_review_form'

const mapStateToProps = (state, ownProps) => {
  return {
    formType: 'Edit Review',
    userId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    business: state.entities.businesses[ownProps.match.params.businessId],
    review: state.entities.reviews[ownProps.match.params.reviewId],
    errors: state.errors.review,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  updateReview: (reviewId, businessId) =>
    dispatch(updateReview(reviewId, businessId)),
  clearErrors: () => dispatch(clearErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditFormReview)
