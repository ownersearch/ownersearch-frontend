import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Input } from 'components/Input/Input'
import Button from 'components/Button'
import OrDivider from 'components/OrDivider'
import { Link } from 'react-router'

import cn from 'classnames'
import s from './Login.scss'

import { vRequired } from 'components/Input/Input.validations'

const LoginPasswordForm = (props) => {
  const { auth, prevLoginStep, handleSubmit, submitting } = props
  return (
    <form noValidate onSubmit={ handleSubmit }>  
      <Field
        name="password"
        type="password"
        component={ Input }
        label="Password"
        validate={ [vRequired] }
      />
      <div className="layout-row layout-align-end">
        <Link className={ s.forgotLink } to="/password-reset">Forgot password?</Link>
      </div>
      <div className="layout-row layout-align-center">
        <div className={ cn('layout-column', s.buttonsContainer) }>
          <Button
            type="submit"
            color="tertiary"
            loading={ submitting }
          >
            Log in
          </Button>
        </div>
      </div>
      <div className="layout-row layout-align-center" style={ { marginTop: '30px' } }>
        <Button
          type="button"
          onClick={ prevLoginStep }
          plain
        >
          Back
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'loginPasswordForm' })(LoginPasswordForm)
