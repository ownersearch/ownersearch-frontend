import { receiveMessage, loaded } from './Chat.actions'
import window from 'window'

export default (store) => {
  window.messengerReady = () => {
    if (window.FxoMessenger) {
      // Wait until the messenger is fully
      // ready, then send a message
      window.FxoMessenger.on('stateChanged', (state) => {
        if (state === 'connected') {
          store.dispatch(loaded())
        }
      })
//      window.FxoMessenger.on('messageSent', console.log)

      // Subscribe to all messages received,
      // logging them to the console
      window.FxoMessenger.create()
      window.FxoMessenger.on('messageReceived', (message) => {
        store.dispatch(receiveMessage(message))
      })
    }
  }
}
