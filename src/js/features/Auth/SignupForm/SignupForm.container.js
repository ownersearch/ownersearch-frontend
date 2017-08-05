import { connect } from 'react-redux'
import Login from './Login'
import { login, authenticate } from 'features/Auth/Auth.actions'

const stateToProps = ({ auth }) => ({
  auth,
})

const dispatchToProps = {
  login,
  authenticate,
}

export default connect(stateToProps, dispatchToProps)(Login)
