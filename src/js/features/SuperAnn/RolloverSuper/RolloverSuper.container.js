import { connect } from 'react-redux'
import RolloverSuper from './RolloverSuper'

const stateToProps = ({ superAnn }) => ({
  superAnn,
})

const dispatchToProps = {
}

export default connect(stateToProps, dispatchToProps)(RolloverSuper)