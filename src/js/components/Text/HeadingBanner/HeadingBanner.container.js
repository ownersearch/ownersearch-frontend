import { connect } from 'react-redux'
import HeadingBanner from './HeadingBanner'

const stateToProps = ({ scroll }) => ({
  position: scroll.position,
})

const dispatchToProps = {
}

export default connect(stateToProps, dispatchToProps)(HeadingBanner)
