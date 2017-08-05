import http from 'axios'

export const getChat = () => ({
  
})

export const toggleChat = (status) => ({
  type: 'CHAT/TOGGLE_CHAT',
  payload: status,
})

export const loaded = () => ({
  type: 'CHAT/LOADED',
  payload: {},
})

export const receiveMessage = (message) => ({
  type: 'CHAT/RECEIVE_MESSAGE',
  payload: message,
})

export const sendMessage = ({ body }) => (dispatch) => {
  FxoMessenger.sendMessage(body)
  dispatch({
    type: 'CHAT/SEND_MESSAGE',
    payload: {
      body,
    },
  })

//  const fakeResponse = (reply) => dispatch({
//    type: 'CHAT/SEND_MESSAGE',
//    payload: new Promise((resolve) => {
//      setTimeout(() => resolve({
//        data: {
//          reply,
//        },
//      }), 1000)
//    }),
//    meta: {
//      body,
//    },
//  })
//
//  if (body === 'Am I rich yet?') {
//    fakeResponse(`Dan, chill. I'm working on it!`)
//  } else if (body === 'What is an ETF?') {
//    fakeResponse(`Hey Dan. An ETF is an Exchange Traded Fund. They represent a basket of stocks and give you exposure to a number of different companies in one trade. For example, the iShares Global Clean Energy ETF, which you are invested in, tracks global companies in the clean energy sector, like Meridian Energy and First Solar. Well done you!`)
//  } else {
//    dispatch({
//      type: 'CHAT/SEND_MESSAGE',
//      payload: http({
//        method: 'POST',
//        url: 'https://043f0f76.ngrok.io/api',
//        data: {
//          txt: body,
//        },
//      }),
//      meta: {
//        body,
//      },
//    })
//  }
}
