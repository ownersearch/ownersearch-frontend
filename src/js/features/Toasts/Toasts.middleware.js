import { show } from 'features/Toasts/Toasts.actions.js'
import { get } from 'lodash'

/*********************************************************************

This middleware will add an error toast when possible.

*********************************************************************/

const middleware = store => next => action => {
  if (get(action, 'type', '').endsWith('_REJECTED')) {
    const toastMessage = get(action, 'payload.response.data.message')
    if (toastMessage) {
      store.dispatch(show({
        type: 'error',
        title: toastMessage,
      }))
    }
  }
  return next(action)
}

export default middleware
