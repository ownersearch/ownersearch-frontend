import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { pick } from 'lodash'

import Button from 'components/Button'
import { Container } from 'components/Layout'
import HeadingBanner from 'components/Text/HeadingBanner'
import OnboardingDots from 'components/OnboardingDots'
import OrDivider from 'components/OrDivider'
import JoinAccountForm from './JoinAccountForm'

import cn from 'classnames'
import sText from 'components/Text/Text.scss'
import sAnim from 'components/Animation/Animation.scss'

export default class JoinAccount extends Component {
  static propTypes = {
    registerOrUpdate: PropTypes.func.isRequired,
  }
  onSubmit = (formData) => {
    const { registerOrUpdate, push } = this.props
    return registerOrUpdate(formData)
      .then(() => {
        push('/join/details')
      })
  }
  render() {
    const { user, logout } = this.props
    return (
      <div>
        <HeadingBanner>
          <h2 className={ sText.heading3 }>Oh Hello,</h2>
          <div className={ sText.descrip1 }>It’ll only take a minute to get going with Zuper.</div>
        </HeadingBanner>
        <Container className={ cn(sAnim.comeUp, 'sm layout-column layout-align-center-center flex') } paddingBottom>
          <OnboardingDots />
          <JoinAccountForm
            onSubmit={ this.onSubmit }
            user={ user }
            initialValues={ pick(user, ['givenNames', 'email', 'lastName']) }
            logout={ logout }
          />
        </Container>
      </div>
    )
  }
}

