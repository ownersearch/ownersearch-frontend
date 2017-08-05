import { connect } from 'react-redux'
import { hideModal, resolveModal, rejectModal } from '../Modal.actions.js'

import Modal from './Modal'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  hideModal,
  resolveModal,
  rejectModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
