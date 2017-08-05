import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Input } from 'components/Input/Input'
import Button from 'components/Button'
import OrDivider from 'components/OrDivider'
import { Link } from 'react-router'
import { vRequired, vEmail } from 'components/Input/Input.validations'

import cn from 'classnames'
import s from './Login.scss'

const LoginEmailForm = (props) => {
  const { auth, authenticate, handleSubmit, change, submit } = props
  
  const authenticateWithUpdate = provider => authenticate(provider)
    .then((data) => {
      console.log(data)
      change('email', data.value.data.email)
      submit()
    })

  return (
    <form
      noValidate
      onSubmit={ handleSubmit }
    >
      <Field
        name="email"
        type="email"
        component={ Input }
        label="Email"
        validate={ [vRequired, vEmail] }
      />
      <div className="layout-row layout-align-end">
        <Link className={ s.forgotLink } to="/password-reset">Forgot password?</Link>
      </div>
      <div className="layout-row layout-align-center">
        <div className={ cn('layout-column layout-align-center-center', s.buttonsContainer) }>
          <Button
            type="submit"
            color="tertiary"
            loading={ auth.loginForm.loading }
          >
            Next
          </Button>
          <OrDivider />
          <Button
            type="button"
            color="facebook"
            onClick={ () => authenticateWithUpdate('facebook') }
            style={ { textTransform: 'inherit' } }
            loading={ auth.facebookLoading }
          >
            Sign in with Facebook
          </Button>
          <Button
            type="button"
            color="google"
            onClick={ () => authenticateWithUpdate('google') }
            style={ { textTransform: 'inherit' } }
            loading={ auth.googleLoading }
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'loginEmailForm' })(LoginEmailForm)
