import { connect } from 'react-redux'
import InvestmentsQuestions from './InvestmentsQuestions'
import { push } from 'react-router-redux'
import { resetQuestions } from 'features/Investments/Investments.actions'

const stateToProps = ({ investments }) => ({
  investments,
})

const dispatchToProps = {
  resetQuestions,
  push,
}

export default connect(stateToProps, dispatchToProps)(InvestmentsQuestions)
