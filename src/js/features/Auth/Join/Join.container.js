import { connect } from 'react-redux'
import Join from './Join'
import { authenticate } from 'features/Auth/Auth.actions'

const stateToProps = ({ auth }) => ({
  auth,
})

const dispatchToProps = {
  authenticate,
}

export default connect(stateToProps, dispatchToProps)(Join)
