import { createStore, applyMiddleware, compose } from 'redux'
import { persistState } from 'redux-devtools'
import window from 'window'

// Middleware
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import toastsMiddleware from 'features/Toasts/Toasts.middleware'

// Other
import rootReducer from '../reducer'

const middlewares = [
  thunk,
  toastsMiddleware,
  promise(),
  createLogger({ collapsed: true, predicate: (getState, action) => !action.type.startsWith('SCROLL') }),
  routerMiddleware(browserHistory),
  require('redux-immutable-state-invariant')(),
];

// By default we try to read the key from ?debug_session=<key> in the address bar
const getDebugSessionKey = function () {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length) ? matches[1] : null;
};

const enhancer = compose(
  applyMiddleware(...middlewares),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey()),
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, undefined, enhancer)
  // Merge the initialState
  store.dispatch({
    type: 'MERGE_INITIAL_STATE',
    payload: initialState
  })

  // Enable hot module replacement for reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducer', () => {
      const nextReducer = require('../reducer').default;
      store.replaceReducer(nextReducer);
    })
  }

  return store
}
