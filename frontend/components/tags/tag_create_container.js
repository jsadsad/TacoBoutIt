import { connect } from 'react-redux'
import { createTag } from '../../actions/tag_actions'
import ReviewTag from './tag_create'

const mapDispatchToProps = (dispatch) => {
  return {
    createTag: (tag) => dispatch(createTag(tag)),
  }
}

export default connect(null, mapDispatchToProps)(ReviewTag)
