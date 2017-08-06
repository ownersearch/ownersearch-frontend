import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { merge } from 'lodash'

import auth from 'features/Auth/Auth.reducer'
import layout from 'features/Layout/Layout.reducer'
import storeReducer from 'features/Store/Store.reducer'
import analytics from 'features/Analytics/Analytics.reducer'
import modal from 'features/Modal/Modal.reducer'
import scroll from 'components/Scroll/Scroll.reducer'
import toasts from 'features/Toasts/Toasts.reducer'
import locationSearch from 'features/LocationSearch/LocationSearch.reducer'
import people from 'features/People/People.reducer'
import { reducer as form } from 'redux-form'

const splitReducers = combineReducers({
  auth,
  locationSearch,
  routing,
  layout,
  analytics,
  modal,
  scroll,
  toasts,
  form,
  people,
})

export default (state, action) => {
  if (action.type === 'MERGE_INITIAL_STATE') {
    return merge({}, state, action.payload)
  } else {
    const isStoreAction = action && action.type && action.type.startsWith('STORE/')
    return isStoreAction
      ? splitReducers(storeReducer(state, action), action)
      : splitReducers(state, action)
  }
}
