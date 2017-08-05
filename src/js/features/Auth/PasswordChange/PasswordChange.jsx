import React, { Component, PropTypes } from 'react'

import Button from 'components/Button'
import BarPage from 'components/Layout/BarPage'
import CtaTopRight from 'components/CtaTopRight'
import { Container } from 'components/Layout'
import PasswordChangeForm from './PasswordChangeForm'

import cn from 'classnames'
import sText from 'components/Text/Text.scss'

export default class PasswordReset extends Component {
  static propTypes = {
    updatePassword: PropTypes.func.isRequired,
  }
  submit = ({ password }) => {
    const { auth, updatePassword, location } = this.props
    return updatePassword({
      password,
      email: location.query.email,
      token: location.query.resetToken,
    })
  }
  render() {
    const { auth } = this.props
    return (
      <BarPage>
        <div className="flex layout-column layout-align-center-center">
          <PasswordChangeForm onSubmit={ this.submit } />
        </div>
      </BarPage>
    )
  }
}
