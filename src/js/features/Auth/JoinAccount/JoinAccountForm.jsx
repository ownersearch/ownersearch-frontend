import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Input } from 'components/Input/Input'
import Button from 'components/Button'
import { vRequired, vEmail, vPasswordIdentical } from 'components/Input/Input.validations'
import { Row, Col } from 'components/Layout'

import s from './JoinAccount.scss'
import cn from 'classnames'

const JoinAccountForm = (props) => {
  const { user, handleSubmit, submitting, logout } = props
  const isUser = user && user.id
  return (
    <form noValidate onSubmit={ handleSubmit } className="layout-column layout-align-center-center">
      <div>
        <Row className="layout-xs-col layout-gt-xs-row">
          <Col className="flex-gt-xs-50">
            <Field
              name="givenNames"
              component={ Input }
              label="First name"
              validate={ vRequired }
            />
          </Col>
          <Col className="flex-gt-xs-50">
            <Field
              name="lastName"
              component={ Input }
              label="Last name"
              validate={ vRequired }
            />
          </Col>
        </Row>
        <Field
          name="email"
          type="email"
          component={ Input }
          label="Email"
          validate={ [vRequired, vEmail] }
        />
        { !isUser && (
          <div>
            <Field
              name="password"
              type="password"
              component={ Input }
              label="Password"
              validate={ vRequired }
            />
            <Field
              name="confirmPassword"
              type="password"
              component={ Input }
              label="Confirm Password"
              validate={ [vPasswordIdentical, vRequired] }
            />
          </div>
        ) }
      </div>

      <div className={ cn(s.buttonsContainer, 'layout-column') }>
        <Button
          color="tertiary"
          type="submit"
          loading={ submitting }
        >
          { isUser ? 'Next' : 'Register' }
        </Button>
        <br />
        <br />
        <div className="layout-row layout-align-center">
          <Button
            prev
            onClick={ logout }
            to="/join"
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'joinAccountForm' })(JoinAccountForm)
