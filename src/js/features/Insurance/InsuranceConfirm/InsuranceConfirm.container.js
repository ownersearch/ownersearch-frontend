import { connect } from 'react-redux'
import InsuranceConfirm from './InsuranceConfirm'
import { submitInsurance, showTerms } from 'features/Insurance/Insurance.actions'

const stateToProps = ({ insurance }) => ({
  insurance,
})

const dispatchToProps = {
  submitInsurance,
  showTerms,
}

export default connect(stateToProps, dispatchToProps)(InsuranceConfirm)
