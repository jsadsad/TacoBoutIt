import { connect } from 'react-redux'
import { fetchBusiness } from '../../../actions/business_actions'
import { fetchReviews, deleteReview } from '../../../actions/review_actions'
import { fetchUsers } from '../../../actions/user_actions'
import { selectBusiness } from '../../../selectors/selectors'
import { getReviewsForBusiness } from '../../../selectors/selectors'
import BusinessShow from './BusinessShow'

const mapStateToProps = (state, { match }) => {
  const users = state.entities.users
  const businessId = parseInt(match.params.businessId)
  const business = selectBusiness(state.entities, businessId)
  const reviews = getReviewsForBusiness(state, { businessId })
  return {
    businessId,
    business,
    reviews,
    users,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow)
