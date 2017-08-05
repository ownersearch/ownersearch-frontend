import initHttp from './initHttp'
import initAuth from './initAuth'
import window from 'window'

import { modalAction as messageModalAction } from 'features/Modal/MessageModal'

const isIE = () => {
  const ua = window.navigator.userAgent
  return ua.includes('MSIE ') || ua.includes('Trident/')
}

export default (store) => {
  initHttp(store)
  initAuth(store)

  // Pop a message modal if the user is on Internet Exporer
  if (isIE()) {
    store.dispatch(messageModalAction({
      title: `Sorry, Zuper doesn't work well with Internet Explorer.`,
      body: `Swap to Chrome, Firefox or Microsoft Edge and you'll be good to go.`,
      noClickClose: true,
      hideClose: true,
    }))
  }
}
