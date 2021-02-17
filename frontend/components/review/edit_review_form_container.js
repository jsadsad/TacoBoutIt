import { connect } from 'react-redux'
import { updateReview, clearErrors } from '../../actions/review_actions'
import { fetchBusiness } from '../../actions/business_actions'
import ReviewForm from './review_form'

const mapStateToProps = (state, ownProps) => {
    return {
        formType: "Update Event",
        currentUserId: state.session.id,
        review: state.reviews.reviews[ownProps.match.params.reviewId],
        business: state.entities.businesses[ownProps.match.params.businessId],
        businessId: ownProps.match.params.businessId,
        errors: state.errors.review
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (review) => dispatch(updateReview(review)),
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)