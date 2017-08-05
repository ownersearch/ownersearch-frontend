import { connect } from 'react-redux'
import JoinAccount from './JoinAccount'
import { logout, registerOrUpdate } from 'features/Auth/Auth.actions'
import { push } from 'react-router-redux'

const stateToProps = ({ auth }) => ({
  user: auth.user,
})

const dispatchToProps = {
  registerOrUpdate,
  logout,
  push,
}

export default connect(stateToProps, dispatchToProps)(JoinAccount)
