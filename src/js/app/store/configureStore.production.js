import { createStore, applyMiddleware, compose } from 'redux';
import qs from 'querystring'
import window from 'window'

import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import createLogger from 'redux-logger'
import toastsMiddleware from 'features/Toasts/Toasts.middleware'

import rootReducer from '../reducer'

const searchParams = qs.parse(window.location.search.substring(1))

const middleware = [
  thunk,
  toastsMiddleware,
  promise(),
  // If ?debug search param is used, the redux logger is added
  ...(searchParams.debug
    ? [createLogger({ collapsed: true, predicate: (getState, action) => !action.type.startsWith('SCROLL') })]
    : []),
  routerMiddleware(browserHistory),
]

const enhancer = compose(
  applyMiddleware(...middleware)
)(createStore)

export default function configureStore(initialState) {
  const store = enhancer(rootReducer, undefined)
  // Merge the initialState
  store.dispatch({
    type: 'MERGE_INITIAL_STATE',
    payload: initialState
  })
  return store
}
