import React, { Component, PropTypes } from 'react'
import Modal from '../Modal'

export default class ModalContainer extends Component {  
  static propTypes = {
    types: PropTypes.array,     // Array of modalTypes that can be displayed such as : ['FILE_DOWNLOAD'] (If not supplied, all modals will be dislayed)
    modal: PropTypes.object,    // Modals object
  }
  render() {
    const { modal, types, dispatch, ...otherProps } = this.props
    const stack = modal.stack ? modal.stack : []
    const filteredStack = types
      ? stack.filter(modal => types.includes(modal.modalType))
      : stack

    return (
      <div { ...otherProps }>
        { filteredStack.map(modalItem => (
          <Modal
            key={ modalItem.modalId }
            modal={ modalItem }
          />
        )) }
      </div>
    )
  }
}
