import { connect } from 'react-redux'
import ContactForm from './ContactForm'
import { submitForm } from 'features/Contact/Contact.actions'

const stateToProps = ({ contact }) => ({
  contact,
})

const dispatchToProps = {
  onSubmit: submitForm,
}

export default connect(stateToProps, dispatchToProps)(ContactForm)
