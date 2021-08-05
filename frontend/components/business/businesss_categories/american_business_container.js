import { connect } from 'react-redux'
import { fetchBusinesses } from '../../../actions/business_actions'
import { getAmericanBiz } from '../../../selectors/selectors'
import BusinessIndex from '../business_index/BusinessIndex'

const mapStateToProps = (state) => {
  return {
    businesses: getAmericanBiz(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex)
