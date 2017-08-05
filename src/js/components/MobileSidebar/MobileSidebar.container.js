import { connect } from 'react-redux'
import MobileSidebar from './MobileSidebar'
import { toggleMenu } from 'features/Layout/Layout.actions'
import { logout } from 'features/Auth/Auth.actions'

const stateToProps = ({ layout }) => ({
  layout,
})

const dispatchToProps = {
  toggleMenu,
  logout,
}

export default connect(stateToProps, dispatchToProps)(MobileSidebar)