import 'babel-core/register'

import React from 'react'
import { merge } from 'lodash'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Root from './Root'
import configureStore from './store/configureStore'
import getInitialState from './state/getInitialState'
import persistConfig from './state/persistConfig'
import initApp from 'app/init'
import { createPersistor } from 'redux-persist'
import 'styles/global/index.global.css'
import 'styles/modules/index.scss'

const initReactAndRedux = (initialState = {}) => {
  // Get the initial state by combining the SSR state and the
  // local storage state
  const fullInitialState = merge({}, window.__PRELOADED_STATE__, initialState)
  const store = configureStore(fullInitialState)
  
  initApp(store)
  createPersistor(store, persistConfig)
  const history = syncHistoryWithStore(browserHistory, store)

  // Get the DOM Element that will host our React application
  const rootEl = document.getElementById('app')

  // Render the React application to the DOM'
  const root = <Root store={ store } history={ history } />
  const getAppContainer = (rootApp) => {
    if (process.env.NODE_ENV !== 'production') {
      return rootApp
      const AppContainer = require('react-hot-loader').AppContainer
      const Redbox = require('redbox-react')
      return (
        <AppContainer errorReporter={ Redbox }>
          { rootApp }
        </AppContainer>
      )
    }
    return root
  }
  render(getAppContainer(root), rootEl)

  // Get the spinner DOM Element
  const spinnerEl = document.getElementById('spinner')
  // Change the opacity to animate it out
  spinnerEl.style.opacity = 0
  // Remove it after 300ms (the transition time)
  setTimeout(() => spinnerEl.parentElement.removeChild(spinnerEl), 300)

  if (module.hot && process.env.NODE_ENV !== 'production') {
    /**
     * Warning from React Router, caused by react-hot-loader.
     * The warning can be safely ignored, so filter it from the console.
     * Otherwise you'll see it every time something changes.
     * See https://github.com/gaearon/react-hot-loader/issues/298
     */
     const orgError = console.error // eslint-disable-line no-console
     console.error = (message) => { // eslint-disable-line no-console
       if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
         // Log the error as normally
         orgError.apply(console, [message])
       }
     }

    module.hot.accept('./Root', () => {
      // If you use Webpack 2 in ES modules mode, you can
      // use <App /> here rather than require() a <NextApp />.
      const NextApp = require('./Root').default
      const nextRoot = <NextApp store={store} history={history} />
      render(getAppContainer(nextRoot), rootEl)
    })
  }
}

getInitialState(persistConfig)
  .then(initReactAndRedux)
