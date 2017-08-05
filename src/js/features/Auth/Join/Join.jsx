import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import Button from 'components/Button'
import OrDivider from 'components/OrDivider'
import BarPage from 'components/Layout/BarPage'
import CtaTopRight from 'components/CtaTopRight'

import imgLandscape from 'static/images/illustrations-color/landscape.svg'

import cn from 'classnames'
import s from './Join.scss'
import sText from 'components/Text/Text.scss'

export default class Join extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    authenticate: PropTypes.func.isRequired,
  }
  render() {
    const { auth, login, authenticate } = this.props
    return (
      <BarPage title="Welcome to Zuper. Your Super friendly app!">
        <img className={ s.illustration } src={ imgLandscape } />
        <CtaTopRight text="Have an account?">
          <Button
            to="/login"
            plain
            size="sm"
            className="hide-gt-xs"
          >
            Log in
          </Button>          
          <Button
            to="/login"
            ghost
            color="tertiary"
            size="sm"
            className="hide-xs"
          >
            Log in
          </Button>
        </CtaTopRight>
        <div className={ cn(s.content, 'layout-column flex layout-align-center-center') }>
          <div className={ cn(s.title, 'hide-xs') }>Welcome to Zuper.<br />Your Super friendly app!</div>
          <div className={ cn(s.buttonsContainer, 'layout-column')}>
            <Button
              to="/join/account"
              color="tertiary"
            >
              Sign up with email
            </Button>
            <OrDivider />
            <Button
              color="facebook"
              onClick={ () => authenticate('facebook') }
              style={ { textTransform: 'inherit' } }
              loading={ auth.facebookLoading }
            >
              Sign up with Facebook
            </Button>
            <Button
              color="google"
              onClick={ () => authenticate('google') }
              style={ { textTransform: 'inherit' } }
              loading={ auth.googleLoading }
            >
              Sign up with Google
            </Button>            
            <div className="layout-row layout-align-center" style={ { marginTop: '30px' } }>
              <Button
                to="/landing"
                plain
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </BarPage>
    )
  }
}
