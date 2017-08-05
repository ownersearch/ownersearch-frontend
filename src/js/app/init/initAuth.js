import { loadUserData } from 'features/Auth/Auth.actions'
import { superTick, getSuperFunds } from 'features/SuperAnn/SuperAnn.actions'

export default (store) => {
  // Load the user data
  const { auth } = store.getState()
  if (auth.token) {
    store.dispatch(loadUserData())
//    store.dispatch(superTick())
//    store.dispatch(getSuperFunds())
  }
}
