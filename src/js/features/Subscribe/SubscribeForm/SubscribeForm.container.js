import { connect } from 'react-redux'
import SubscribeForm from './SubscribeForm'
import { submitForm } from 'features/Subscribe/Subscribe.actions'

const stateToProps = ({ subscribe }) => ({
  subscribe,
})

const dispatchToProps = {
  submitForm,
}

export default connect(stateToProps, dispatchToProps)(SubscribeForm)
