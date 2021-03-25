import { connect } from 'react-redux'
import { fetchBusinesses } from '../../../actions/business_actions'
import { getThaiBiz } from '../../../reducers/selectors'
import BusinessIndex from '../business_index/business_index'

const mapStateToProps = (state) => {
  return {
    businesses: getThaiBiz(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex)
