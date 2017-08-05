import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Input } from 'components/Input/Input'
import Button from 'components/Button'
import { vRequired, vEmail } from 'components/Input/Input.validations'
import { Container } from 'components/Layout'
import Stepper from 'components/Stepper'

import sText from 'components/Text/Text.scss'

const PasswordResetForm = (props) => {
  const { handleSubmit, submitting, submitSucceeded } = props
  return (
    <form
      noValidate
      onSubmit={ handleSubmit }
    >
      <Stepper step={ submitSucceeded ? 2 : 1 }>
        <div>
          <div className={ sText.descrip1 } style={ { marginBottom: '10px' } }>
            Forgot Password?
          </div>
          <div className={ sText.descrip3 } style={ { marginBottom: '30px' } }>
            Enter your email address below and we'll get you back on track.
          </div>
          <Field
            name="email"
            type="email"
            component={ Input }
            label="Email"
            validate={ [vRequired, vEmail] }
          />
          <div className="layout-column layout-align-center-center" style={ { marginTop: '60px' } }>
            <Button
              loading={ submitting }
              color="tertiary"
              type="submit"
            >
              Reset
            </Button>
            <Button
              style={ { marginTop: '30px' } }
              plain
              to="/landing"
            >
              Back
            </Button>
          </div>
        </div>
        <div style={ { textAlign: 'center' } }>
          <div className={ sText.descrip1 } style={ { marginBottom: '10px' } }>
            Zuccess!</div>
          <div className={ sText.descrip3 } style={ { marginBottom: '30px' } }>
            If we find an account associated with that address there will be an email heading your way.
          </div>
          <div className="layout-column layout-align-center-center">
            <Button
              plain
              to="/landing"
            >
              Back
            </Button>
          </div>
        </div>
      </Stepper>
    </form>
  )
}

export default reduxForm({ form: 'passwordResetForm' })(PasswordResetForm)
