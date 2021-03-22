import { connect } from 'react-redux'
import { updateTag, fetchTag, fetchTags } from '../../actions/tag_actions'
import { fetchReviews } from '../../actions/review_actions'
import UpdateTag from './tag_update'

const mapDispatchToProps = (dispatch) => {
  return {
    updateTag: (tag) => dispatch(updateTag(tag)),
    fetchTag: (tagId) => dispatch(fetchTag(tagId)),
    fetchTags: (review) => dispatch(fetchTags(review)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  }
}

export default connect(null, mapDispatchToProps)(UpdateTag)
