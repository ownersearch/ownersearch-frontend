import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { clamp } from 'lodash'

import Button from 'components/Button'
import OrDivider from 'components/OrDivider'
import BarPage from 'components/Layout/BarPage'
import CtaTopRight from 'components/CtaTopRight'
import Stepper from 'components/Stepper'
import LoginEmailForm from './LoginEmailForm'
import LoginPasswordForm from './LoginPasswordForm'

import imgLogo from 'static/images/logo-white.svg'
import imgLandscape from 'static/images/illustrations-color/landscape.svg'

import cn from 'classnames'
import s from './Login.scss'
import sText from 'components/Text/Text.scss'

export default class Login extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    authenticate: PropTypes.func.isRequired,
  }
  onSubmitEmail = () => {
    const { nextLoginStep } = this.props
    nextLoginStep()
  }  
  onSubmitPassword = ({ password }) => {
    const { login } = this.props
    return login({
      password,
    })
  }
  render() {
    const { auth, login, authenticate, prevLoginStep } = this.props
        
    return (
      <BarPage title="Welcome to Zuper. Your Super friendly app!">
        <img className={ s.illustration } src={ imgLandscape } />
        <CtaTopRight text="Don't have an account?">
          <Button
            to="/join"
            plain
            size="sm"
            className="hide-gt-xs"
          >
            Sign up
          </Button> 
          <Button
            to="/join"
            ghost
            color="tertiary"
            size="sm"
            className="hide-xs"
          >
            Sign up
          </Button>
        </CtaTopRight>
        <div className={ cn(s.content, 'layout-column flex layout-align-center-center') }>
          <Stepper step={ auth.loginForm.step }>
            <LoginEmailForm
              authenticate={ authenticate }
              auth={ auth }
              onSubmit={ this.onSubmitEmail }
            />
            <LoginPasswordForm
              prevLoginStep={ prevLoginStep }
              auth={ auth }
              onSubmit={ this.onSubmitPassword }
            />
          </Stepper>
        </div>
      </BarPage>
    )
  }
}
