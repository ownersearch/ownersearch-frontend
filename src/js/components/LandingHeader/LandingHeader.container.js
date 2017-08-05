import { connect } from 'react-redux'
import LandingHeader from './LandingHeader'

const stateToProps = ({ layout, scroll }) => ({
  layout,
  atTop: scroll.position === 0,
})

const dispatchToProps = {
}

export default connect(stateToProps, dispatchToProps)(LandingHeader)
