import { connect } from 'react-redux'
import LandingNav from './landing_nav'
import { logout } from '../../../actions/session_actions'

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingNav)
