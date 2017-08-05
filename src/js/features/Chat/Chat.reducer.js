import i from 'icepick'
import window from 'window'
import getUuid from 'utils/getUuid'

const initialState = {
  isOpen: false,
  loading: true,
  log: [
//    {
//      body: `Hi, I'm Zena, got a question? Ask me!`
//    }
  ],
  newMessage: {
    body: '',
    pending: false,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHAT/GET_CHAT':
      return state    
    case 'CHAT/LOADED':
      return i.assoc(state, 'loading', false)
      
    case 'CHAT/SEND_MESSAGE':
      if (window.analytics) {
        window.analytics.track('Message sent', {
          text: action.payload.body,
        })
      }
      return i.chain(state)
        .updateIn(['log'], (log) => {
          return i.push(log, {
            id: getUuid(),
            body: action.payload.body,
            user: true,
          })
        })        
        .assocIn(['newMessage', 'body'], '')
        .assocIn(['newMessage', 'pending'], true)
        .value()    
    
    case 'CHAT/TOGGLE_CHAT':
      return i.assoc(state, 'isOpen', action.payload || !state.isOpen)
      
//    case 'CHAT/SEND_MESSAGE_FULFILLED':
//      return i.chain(state)       
//        .assocIn(['newMessage', 'pending'], false)
//        .updateIn(['log'], (log) => {
//          return i.push(log, {
//            body: action.payload.data.reply,
//          })
//        }) 
//        .value()    
    
    case 'CHAT/RECEIVE_MESSAGE':      
      return i.chain(state)
        .assocIn(['newMessage', 'pending'], false)
        .updateIn(['log'], (log) => {
          const { text, id, choices } = action.payload
          // If we cannot find this message in the log, push it on
          return log.find(item => item.id === id) ? log : i.push(log, {
            body: text,
            id,
            choices,
          })
        }) 
        .value()

    default:
        return state;
  }
}
