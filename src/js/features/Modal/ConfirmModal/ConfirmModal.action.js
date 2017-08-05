import { registerModal } from 'features/Modal/ModalRegistry'
import ConfirmModal from './ConfirmModal'
import { showModal } from 'features/Modal/Modal.actions'

export const modalType = 'CONFIRM'
registerModal(modalType, ConfirmModal)
export default () => showModal({
  modalType,
  modalProps: {},
})
