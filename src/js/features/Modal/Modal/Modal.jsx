import React, { Component } from 'react'

import ReactModal from 'react-modal'
import { getModal } from '../ModalRegistry'

import IconClose from 'components/Icons/Close'

import s from './Modal.scss'
import cn from 'classnames'

export default class Modal extends Component {
  renderContent() {
    // Get the modal from the modal registry and add the modal props.
    const { modal } = this.props
    let template = null
    if (modal.modalType) {
      const ModalTemplate = getModal(modal.modalType)
      if (ModalTemplate) {
        const additionalProps = {
          modalCancel: this.modalCancel,
          modalConfirm: this.modalConfirm
        }
        const allProps = Object.assign({}, modal.modalProps, additionalProps)
        template = <ModalTemplate { ...allProps } />
      }
    }
    return template
  }
  modalCancel = (data = {}) => {
    const { modalId } = this.props.modal
    // If the data is an object, string, number or boolean. Resolve
    // This is used to ignore mouse click events
    if (['Object', 'String', 'Number', 'Boolean'].includes(data.constructor.name)) {
      this.props.rejectModal({ modalId, data })
    } else {
      this.props.rejectModal({ modalId })
    }
    this.props.hideModal({ modalId })
  }
  modalConfirm = (data = {}) => {
    const { modalId } = this.props.modal
    // If the data is an object, string, number or boolean. Resolve
    // This is used to ignore mouse click events
    if (['Object', 'String', 'Number', 'Boolean'].includes(data.constructor.name)) {
      this.props.resolveModal({ modalId, data })
    } else {
      this.props.resolveModal({ modalId })
    }
    this.props.hideModal({ modalId })
  }
  onRequestClose = () => {
    const { modal } = this.props
    if (modal.modalOptions && modal.modalOptions.noClickClose) {
      return
    } else {
      this.modalCancel()
    }
  }
  render() {
    const { modal, className } = this.props
    return (
      <ReactModal
        closeTimeoutMS={ 200 }
        isOpen
        contentLabel={ modal.modalType }
        onRequestClose={ this.onRequestClose }
        className={ cn('modal', 'layout-column', className) }
        overlayClassName="layout-column layout-align-center-center modalOverlay"
      >
        { modal.modalOptions.hideClose ? null : <a className={ s.button }>
          <IconClose size={ 30 } onClick={ this.modalCancel }/>
        </a> }
        { this.renderContent() }
      </ReactModal>
    )
  }
};
