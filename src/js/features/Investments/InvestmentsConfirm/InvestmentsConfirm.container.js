import { connect } from 'react-redux'
import InvestmentsConfirm from './InvestmentsConfirm'
import { submitInvestments, showTerms } from 'features/Investments/Investments.actions'

const stateToProps = ({ investments }) => ({
  investments,
})

const dispatchToProps = {
  submitInvestments,
  showTerms,
}

export default connect(stateToProps, dispatchToProps)(InvestmentsConfirm)
