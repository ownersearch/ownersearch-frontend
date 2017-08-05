import { connect } from 'react-redux'
import Page from './Page'
import { setLayout } from 'features/Layout/Layout.actions'
import { updatePosition } from 'components/Scroll/Scroll.actions'

const stateToProps = () => ({
})

const dispatchToProps = {
  setLayout,
  updatePosition,
}

export default connect(stateToProps, dispatchToProps)(Page)
