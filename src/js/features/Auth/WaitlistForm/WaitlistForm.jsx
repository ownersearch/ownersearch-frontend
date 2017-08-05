import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'
import { Input } from 'components/Input/Input'
import Button from 'components/Button'
import Overlay from 'components/Overlay'
import SocialShares from 'components/SocialShares'
import { vRequired, vEmail } from 'components/Input/Input.validations'

import cn from 'classnames'
import s from './WaitlistForm.scss'

class WaitlistForm extends Component {
  render() {
    const { thankYouMessage, handleSubmit, submitting, submitSucceeded, submitFailed } = this.props
    return (
      <form
        noValidate
        onSubmit={ handleSubmit }
      >
        <div className="layout-xs-col layout-gt-xs-row layout-align-gt-xs-start-center">
          <div className="flex">
            <Field
              name="firstname"
              component={ Input }
              color="white"
              label="First Name"
              validate={ [vRequired] }
            />
          </div>
          <div className={ cn(s.input, 'flex') }>
            <Field
              name="lastname"
              component={ Input }
              color="white"
              label="Last Name"
              validate={ [vRequired] }
            />
          </div>
          <div className={ cn(s.input, 'flex') }>
            <Field
              name="email"
              component={ Input }
              color="white"
              type="email"
              label="Email"
              validate={ [vRequired, vEmail] }
            />
          </div>
          <div className="flex" style={ { display: 'none' } }>
            <Field
              name="hidden"
              component={ Input }
              color="white"
              label="Trick the bots"
            />
          </div>
          <Button
            color="white"
            ghost
            type="submit"
            className={ s.input }
            style={ { marginTop: '4px' } }
            loading={ submitting }
            error={ submitFailed }
          >
            Zuperfy me!
          </Button>
        </div>
        { submitSucceeded && (
          <Overlay color="primary">
            <div style={ { maxWidth: '600px' } }>
              Thanks for signing up! We will let you know as soon as we launch. { thankYouMessage || 'In the meantime, let everyone know about Zuper!' }
            </div>
            <div style={ { marginTop: '15px' } }>
              <SocialShares color="white" size="sm" />
            </div>
          </Overlay>
        ) }
      </form>
    )
  }
}

export default reduxForm({
  form: 'waitlistForm',
})(WaitlistForm)
