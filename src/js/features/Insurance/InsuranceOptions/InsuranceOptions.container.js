import { connect } from 'react-redux'
import InsuranceOptions from './InsuranceOptions'

const stateToProps = ({ insurance, form }) => ({
  insurance,
  formData: form.insuranceOptions,
})

const dispatchToProps = {
}

export default connect(stateToProps, dispatchToProps)(InsuranceOptions)
