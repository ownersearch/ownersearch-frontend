import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import Button from 'components/Button'
import BarPage from 'components/Layout/BarPage'
import CtaTopRight from 'components/CtaTopRight'
import { Container } from 'components/Layout'
import PasswordResetForm from './PasswordResetForm'

import cn from 'classnames'
import sText from 'components/Text/Text.scss'

export default class PasswordReset extends Component {
  static propTypes = {
    passwordReset: PropTypes.func.isRequired,
  }
  submit = (formData) => {
    const { passwordReset } = this.props
    return passwordReset({
      email: formData.email,
    })
  }
  render() {
    const { passwordReset } = this.props
    return (
      <BarPage>
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
        <div className="flex layout-column layout-align-center-center">
          <PasswordResetForm onSubmit={ this.submit } />
        </div>
      </BarPage>
    )
  }
}
