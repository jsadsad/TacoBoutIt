import { connect } from 'react-redux'
import { createReview } from '../../actions/review_actions'
import { fetchBusiness } from '../../actions/business_actions'
import ReviewForm from './review_form'

const mapStateToProps = (state, ownProps) => {
    return {
        formType: 'Post Review',
        currentUserId: state.session.id,
        business: state.entities.businesses[ownProps.match.params.businessId],
        businessId: ownProps.match.params.businessId,
        review: {
            content: '',
            rating: 0
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: (review) => dispatch(createReview(review)),
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)