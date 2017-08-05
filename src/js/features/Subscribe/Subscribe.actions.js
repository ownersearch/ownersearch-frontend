import http from 'axios'
import window from 'window'

export const submitForm = () => (dispatch, getState) => {
  const subscribe = getState().subscribe
  return dispatch({
    type: 'SUBSCRIBE/SUBMIT_FORM',
    payload: http({
      method: 'POST',
      url: `${window.location.origin}/api/v1/boop`,
      data: {
        identify: {
          userId: subscribe.email,
          traits: {
            firstName: subscribe.firstname,
            lastName: subscribe.lastname,
            email: subscribe.email,
          },
        },
        track: {
          userId: subscribe.email,
          event: 'Subscribed',
          properties: {
            formUrl: window.location.pathname,
          },
        },
      },
    }),
  })
}
