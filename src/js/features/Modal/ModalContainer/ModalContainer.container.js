import { connect } from 'react-redux'
import ModalContainer from './ModalContainer'

const mapStateToProps = ({ modal }) => ({
  modal,
})

export default connect(mapStateToProps)(ModalContainer)
