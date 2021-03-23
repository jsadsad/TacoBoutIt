import { connect } from 'react-redux'
import { fetchReviews, deleteReview } from '../../../actions/review_actions'
import { fetchTag, fetchTags } from '../../../actions/tag_actions'
import ReviewItem from './review_item'

const mapStateToProps = (state) => {
  let currentUser = state.entities.users[state.session.id]
  let tags = Object.values(state.entities.tags)
  let usefulSum = tags.filter((tag) => tag.useful === true).length
  let funnySum = tags.filter((tag) => tag.funny === true).length
  let coolSum = tags.filter((tag) => tag.cool === true).length

  return {
    currentUser,
    usefulSum,
    funnySum,
    coolSum,
    tags,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (review) => dispatch(deleteReview(review)),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    fetchTag: (id) => dispatch(fetchTag(id)),
    fetchTags: (review) => dispatch(fetchTags(review)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem)
