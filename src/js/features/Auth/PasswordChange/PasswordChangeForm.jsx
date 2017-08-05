import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Input } from 'components/Input/Input'
import Button from 'components/Button'
import { vRequired, vPasswordIdentical } from 'components/Input/Input.validations'
import Stepper from 'components/Stepper'

import sText from 'components/Text/Text.scss'

const PasswordChangeForm = (props) => {
  const { handleSubmit, submitting, submitSucceeded } = props
  return (
    <form
      noValidate
      onSubmit={ handleSubmit }
    >
      <Stepper step={ submitSucceeded ? 2 : 1 }>
        <div>
          <div className={ sText.descrip1 } style={ { marginBottom: '10px' } }>
            Change your password
          </div>
          <div className={ sText.descrip3 } style={ { marginBottom: '30px' } }>
            Enter your new password here and you'll be back on track.
          </div>
          <Field
            name="password"
            type="password"
            component={ Input }
            label="Password"
            validate={ [vRequired] }
          />
          <Field
            name="confirmPassword"
            type="password"
            component={ Input }
            label="Confirm Password"
            validate={ [vRequired, vPasswordIdentical] }
          />
          <div className="layout-column layout-align-center-center" style={ { marginTop: '60px' } }>
            <Button
              loading={ submitting }
              color="tertiary"
              type="submit"
            >
              Change
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
            Your password has been updated.
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

export default reduxForm({ form: 'passwordChangeForm' })(PasswordChangeForm)
