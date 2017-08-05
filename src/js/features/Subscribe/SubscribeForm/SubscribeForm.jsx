import React, { Component } from 'react'

import { InputConnected } from 'components/Input/Input'
import Button from 'components/Button'
import Overlay from 'components/Overlay'

import cn from 'classnames'
import s from './SubscribeForm.scss'
import sText from 'components/Text/Text.scss'

export default class SubscribeForm extends Component {
  onSubmit = (event) => {
    event.preventDefault()
    const { submitForm, subscribe } = this.props
    if (subscribe.email && !subscribe.hidden) {
      this.setState({
        success: true,
      })
      submitForm()
    }
  }
  state = {
    success: false,
  }
  render() {
    const { success } = this.state
    return (
      <div className={ s.outer }>
        <form className={ s.form } onSubmit={ this.onSubmit }>
          <div className="layout-row">
            <div className="flex">
              <InputConnected required model="subscribe.firstname" display="standard" label="First name" />
            </div>
            <div className="flex" style={ { marginLeft: '5px' } }>
              <InputConnected required model="subscribe.lastname" display="standard" label="Last name" />
            </div>
          </div>
          <InputConnected required type="email" model="subscribe.email" display="standard" label="Email" />
          <InputConnected model="subscribe.hidden" style={ { display: 'none' } } display="standard" placeholder="Don't use this. Just to trick the bots" />
          <br />
          <div className="layout-row layout-align-end">
            <Button color="tertiary" type="submit" size="sm">Subscribe</Button>
          </div>
        </form>
        { success && <Overlay>Nice, we'll email you when<br/>there are new articles.</Overlay> }
      </div>
    )
  }
}
