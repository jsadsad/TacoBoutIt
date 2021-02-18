import { connect } from 'react-redux'
import { fetchBusiness } from '../../../actions/business_actions'
import { fetchReviews, deleteReview } from '../../../actions/review_actions'
import { selectBusiness } from '../../../reducers/selectors'
import { getReviewsForBusiness } from '../../../reducers/selectors'
import BusinessShow from './business_show'

const mapStateToProps = (state, { match }) => {
  const currentUser = state.entities.users[state.session.id]
  const userId = state.session.id
  const users = state.entities.users
  const businessId = parseInt(match.params.businessId)
  const business = selectBusiness(state.entities, businessId)
  const reviews = getReviewsForBusiness(state, { businessId })
  return {
    currentUser,
    businessId,
    business,
    reviews,
    userId,
    users,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow)
