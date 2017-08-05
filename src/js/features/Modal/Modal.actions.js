import { promises } from './ModalPromises'
import getUuid from 'utils/getUuid'

class DeferredPromise {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    })
  }
}

export const showModal = ({ modalType, modalProps, modalOptions, limit } = {}) => (dispatch) => {
  const modalId = getUuid()

  const modalPromise = new DeferredPromise()

  // Add the promise to the modalPromise object
  promises[modalId] = modalPromise

  return dispatch({
    type: 'MODALS/SHOW_MODAL',
    payload: modalPromise.promise,
    meta: {
      modalId,
      modalType,
      modalProps,
      modalOptions,
      limit, // Limit the number of this modalType to show
      /*******************************
      modalOptions: {
        width: '400px',
        noClickClose: true || false
      }
      *******************************/
    }
  })
}

export function hideModal({ modalId }){
  return {
    type: 'MODALS/HIDE_MODAL',
    payload: {
      modalId,
    },
  };
}

export function closeAll(){
  return {
    type: 'MODALS/CLOSE_ALL',
    payload: {},
  };
}

export function resolveModal({ data, modalId }){
  return {
    type: 'MODALS/RESOLVE',
    payload: {
      modalId,
      data,
    },
  };
}

export function rejectModal({ data, modalId }){
  return {
    type: 'MODALS/REJECT',
    payload: {
      modalId,
      data,
    },
  };
}
