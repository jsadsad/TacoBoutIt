import { connect } from 'react-redux'
import { createReview, clearErrors } from '../../../actions/review_actions'
import { fetchBusiness } from '../../../actions/business_actions'
import ReviewForm from './review_form'

const mapStateToProps = (state, ownProps) => {
  return {
    formType: 'Post Review',
    currentUserId: state.session.id,
    business: state.entities.businesses[ownProps.match.params.businessId],
    businessId: ownProps.match.params.businessId,
    errors: state.errors.review,
    review: {
      content: '',
      rating: 0,
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (review) => dispatch(createReview(review)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    clearErrors: () => dispatch(clearErrors()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
