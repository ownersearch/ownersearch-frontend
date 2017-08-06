import { connect } from 'react-redux'
import AppRoot from './AppRoot'
import { replace } from 'react-router-redux'

const stateToProps = ({ layout }) => ({
  layout,
})

const dispatchToProps = {
  replace,
}

export default connect(stateToProps, dispatchToProps)(AppRoot)
