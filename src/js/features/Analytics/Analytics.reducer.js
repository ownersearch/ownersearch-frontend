import i from 'icepick'
import window from 'window'

const initialState = {
  
}

// Identify the user
setTimeout(() => {
  if (window.analytics) {
    window.analytics.identify()
  }
}, 2000)

export default (state = initialState, action) => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE': {
      if (window.analytics && !action.payload.hash) {
        setTimeout(() => {
          window.analytics.page()
        }, 500)
      }
      return state
    }

    default:
      return state;
  }
}
