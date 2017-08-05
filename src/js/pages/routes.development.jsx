/*****************************************************************

IMPORTANT!
Any changes made here must be made in routes.production
These files should be almost identical. They should only differ by
which routes are async.

*****************************************************************/

import React                                   from 'react'
import { Route, IndexRoute, Redirect }         from 'react-router'

// Routes which are always sync
import AppRoot                                 from 'pages/AppRoot'
import Home                                    from 'pages/Home'
import NotFound                                from 'pages/NotFound'

export default () => (
  <Route                                         component={ AppRoot }>
    <Route path="/"                              component={ Home } />
    <Route path="404"                            component={ NotFound } />
    <Redirect from="*"                           to="404" />
  </Route>
)
