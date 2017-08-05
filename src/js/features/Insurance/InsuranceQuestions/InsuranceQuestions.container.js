import { connect } from 'react-redux'
import { get } from 'lodash'
import InsuranceQuestions from './InsuranceQuestions'
import { push } from 'react-router-redux'
import { resetQuestions } from 'features/Insurance/Insurance.actions'

const stateToProps = ({ insurance, form }) => ({
  insurance,
  formData: get(form, 'insuranceQuestions.values', {}),
})

const dispatchToProps = {
  resetQuestions,
  push,
}

export default connect(stateToProps, dispatchToProps)(InsuranceQuestions)