import { connect } from 'react-redux'
import { login, clearErrors } from '../../actions/session_actions'
import SessionForm from './session_form'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors,
    formType: 'login',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    loginDemo: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
