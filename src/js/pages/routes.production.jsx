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
import Green                                   from 'pages/LandingGreen'
import Tech                                    from 'pages/LandingTech'
import NotFound                                from 'pages/NotFound'
import Contact                                 from 'pages/Contact'
import Landing                                 from 'pages/Landing'
import LandingSuper101                         from 'pages/LandingSuper101'
import LandingInvestment                       from 'pages/LandingInvestment'
import LandingManifesto                        from 'pages/LandingManifesto'
import BlogIndex                               from 'pages/BlogIndex'
import BlogArticle                             from 'pages/BlogArticle'
import Jobs                                    from 'pages/Jobs'
import Privacy                                 from 'pages/Privacy'
import Chat                                    from 'pages/Chat'
import Login                                   from 'pages/Login'
import LandingHealth                           from 'pages/LandingHealth'
import LandingWomen                            from 'pages/LandingWomen'
import LandingBasic                            from 'pages/LandingBasic'
import PasswordChange                          from 'pages/PasswordChange'
import PasswordReset                           from 'pages/PasswordReset'
import LandingSMSF                             from 'pages/LandingSMSF'

export default () => (
  <Route                                       component={ AppRoot }>
    <Route path="/"                            component={ Landing } />
    <Route path="green"                        component={ Green } />
    <Route path="basic"                        component={ LandingBasic } />
    <Route path="tech"                         component={ Tech } />
    <Route path="jobs"                         component={ Jobs } />
    <Route path="health"                       component={ LandingHealth } />
    <Route path="women"                        component={ LandingWomen } />
    <Route path="blog"                         component={ BlogIndex } />
    <Route path="blog/:articleSlug"            component={ BlogArticle } />
    <Route path="super-101"                    component={ LandingSuper101 } />
    <Route path="investment"                   component={ LandingInvestment } />
    <Route path="manifesto"                    component={ LandingManifesto } />
    <Route path="smsf"                         component={ LandingSMSF } />

    <Route path="404"                          component={ NotFound } />
    <Route path="contact"                      component={ Contact } />
    <Route path="privacy"                      component={ Privacy } />
    <Route path="chat"                         component={ Chat } />
    <Route path="login"                        component={ Login } />
    <Route path="password-reset"               component={ PasswordReset } />
    <Route path="password-change"              component={ PasswordChange } />
    <Redirect from="*"                         to="404" />
  </Route>
)
