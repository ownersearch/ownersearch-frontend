import { connect } from 'react-redux'
import PasswordChange from './PasswordChange'
import { updatePassword } from 'features/Auth/Auth.actions'

const stateToProps = ({ auth }) => ({
  auth,
})

const dispatchToProps = {
  updatePassword,
}

export default connect(stateToProps, dispatchToProps)(PasswordChange)
