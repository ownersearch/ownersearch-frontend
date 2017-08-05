import { connect } from 'react-redux'
import ScrollDown from './ScrollDown'

const stateToProps = ({ scroll }) => ({
  atTop: scroll.position === 0,
})

const dispatchToProps = {
}

export default connect(stateToProps, dispatchToProps)(ScrollDown)