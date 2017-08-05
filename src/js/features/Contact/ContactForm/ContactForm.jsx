
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { Input } from 'components/Input/Input'
import { Textarea } from 'components/Input/Textarea'
import Button from 'components/Button'
import Overlay from 'components/Overlay'
import { vRequired, vEmail } from 'components/Input/Input.validations'

import s from './ContactForm.scss'
import sText from 'components/Text/Text.scss'

const ContactForm = (props) => {
  const { handleSubmit, submitting, submitSucceeded, submitFailed } = props
  return (
    <div className={ s.outer }>
      <form
        className={ s.form }
        onSubmit={ handleSubmit }
        noValidate
      >
        <div className={ sText.heading3 }>Drop us a note</div>
        <br />
        <br />
        <div className="layout-row">
          <div className="flex" >
            <Field
              name="firstname"
              component={ Input }
              label="First name"
              validate={ [vRequired] }
            />
          </div>
          <div className="flex" style={ { marginLeft: '5px' } }>
            <Field
              name="lastname"
              component={ Input }
              label="Last name"
              validate={ [vRequired] }
            />
          </div>
        </div>
        <Field
          name="email"
          type="email"
          component={ Input }
          label="Email"
          validate={ [vRequired, vEmail] }
        />
        <Field
          name="subject"
          component={ Input }
          label="Subject"
        />
        <Field
          name="message"
          component={ Textarea }
          display="standard"
          label="Message"
          validate={ [vRequired] }
          style={ { minHeight: '120px' } }
        />
        <div style={ { display: 'none' } }>
          <Field
            name="hidden"
            component={ Input }
            label="Hidden - to trick the bots"
          />
        </div>
        <br />
        <div className="layout-row layout-align-end">
          <Button
            color="tertiary"
            loading={ submitting }
            error={ submitFailed }
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
      { submitSucceeded && <Overlay>Your message has been sent.<br/>We'll get back to you ASAP.</Overlay> }
    </div>
  )
}

export default reduxForm({ form: 'contactForm' })(ContactForm)
