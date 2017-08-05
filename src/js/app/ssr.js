import React from 'react'
import { renderToString } from 'react-dom/server'
import initApp from 'app/init'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import routes from '../pages/routes'
import { match, RouterContext } from 'react-router'
import Helmet from 'react-helmet'

import { getArticle, getArticles } from 'features/Blog/Blog.actions'

// Fetch the blog data
const getData = (dispatch, pathname, params) => {
  if (pathname.startsWith('/blog/')) {
    return dispatch(getArticle(params.articleSlug))
  } else if (pathname.startsWith('/blog')) {
    return dispatch(getArticles())
  }
  return new Promise(resolve => resolve())
}

export default (req, res, renderFullPage) => {
  const initialState = undefined
  const store = configureStore(initialState)
  initApp(store)
  match({
    routes: routes(store),
    location: req.url,
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const { params, location: { pathname } } = renderProps
      // get any required data
      const sendPage = (data) => {
        const html = renderToString(
          <Provider store={ store }>
            <RouterContext {...renderProps} />
          </Provider>
        )
        const preloadedState = store.getState()                            // Grab the initial state from our Redux store
        const helmet = Helmet.renderStatic()                               // Get the helmet data
        res.status(200).send(renderFullPage(html, preloadedState, helmet)) // Send the rendered page back to the client
      }
      
      getData(store.dispatch, pathname, params)
        .then(sendPage)
        .catch(sendPage)
    } else {
      res.status(404).send('Not found')
    }
  })
}
