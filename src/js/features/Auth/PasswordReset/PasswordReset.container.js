import { connect } from 'react-redux'
import PasswordReset from './PasswordReset'
import { passwordReset } from 'features/Auth/Auth.actions'

const stateToProps = ({ auth }) => ({
  auth,
})

const dispatchToProps = {
  passwordReset,
}

export default connect(stateToProps, dispatchToProps)(PasswordReset)
