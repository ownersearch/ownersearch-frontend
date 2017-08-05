import { connect } from 'react-redux'
import Toasts from './Toasts'
import { hide } from './Toasts.actions'

const mapStateToProps = ({ toasts }) => ({
  toasts,
})

const dispatchToProps = {
  hide,
}

export default connect(mapStateToProps, dispatchToProps)(Toasts)
