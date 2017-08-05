import { connect } from 'react-redux'
import WaitlistForm from './WaitlistForm'
import { submitWaitlistForm } from 'features/Auth/Auth.actions'

const stateToProps = ({ auth }) => ({
  auth,
})

const dispatchToProps = {
  onSubmit: submitWaitlistForm,
}

export default connect(stateToProps, dispatchToProps)(WaitlistForm)
