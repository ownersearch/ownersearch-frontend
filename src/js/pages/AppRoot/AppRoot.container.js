import { connect } from 'react-redux'
import AppRoot from './AppRoot'
import { replace } from 'react-router-redux'

const stateToProps = ({ auth, layout }) => ({
  layout,
  isLoggedIn: auth.token && auth.user.id,
})

const dispatchToProps = {
  replace,
}

export default connect(stateToProps, dispatchToProps)(AppRoot)
