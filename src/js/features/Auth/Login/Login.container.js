import { connect } from 'react-redux'
import { get } from 'lodash'
import Login from './Login'
import { login, authenticate, nextLoginStep, prevLoginStep } from 'features/Auth/Auth.actions'

const stateToProps = ({ auth, form }) => ({
  auth,
})

const dispatchToProps = {
  login,
  authenticate,
  nextLoginStep,
  prevLoginStep,
}

export default connect(stateToProps, dispatchToProps)(Login)
