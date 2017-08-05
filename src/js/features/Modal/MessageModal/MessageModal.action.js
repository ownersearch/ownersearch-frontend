import { registerModal } from 'features/Modal/ModalRegistry'
import MessageModal from './MessageModal'
import { showModal } from 'features/Modal/Modal.actions'

export const modalType = 'MESSAGE'
registerModal(modalType, MessageModal)
export const modalAction = ({ title, body, noClickClose, hideClose }) => showModal({
  modalType,
  modalProps: {
    title,
    body,
  },
  modalOptions: {
    noClickClose,
    hideClose,
  },
})
