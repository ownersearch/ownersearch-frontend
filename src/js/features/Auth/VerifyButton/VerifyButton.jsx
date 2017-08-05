import React, { Component, PropTypes } from 'react'

import cn from 'classnames'
import s from './VerifyButton.scss'
import Tooltip from 'components/Tooltip'

export default class VerifyButton extends Component {
  static propTypes = {
    verified: PropTypes.bool.isRequired,
    send: PropTypes.func.isRequired,
  }
  state = {
    sent: false,
  }
  send = () => {
    const { send } = this.props
    send().then(() => {
      this.setState({ sent: true })
    })
  }
  render() {
    const { className, send, verified, ...otherProps } = this.props
    const { sent } = this.state
    if (verified) {
      return (
        <div className={ cn(s.button, s.verified, className) } { ...otherProps }>
          <Tooltip>Verified</Tooltip>
          <div className={ s.dot } />
        </div>
      )
    } else if (sent) {
      return (
        <div className={ cn(s.button, s.mail, className) } { ...otherProps }>
          <Tooltip>Verification message sent</Tooltip>
          <div className={ s.dot } />
        </div>
      )  
    } else {
      return (
        <a className={ cn(s.button, s.unverified, className) } onClick={ this.send } { ...otherProps }>
          <Tooltip>Not verified.<br/>Click to send message.</Tooltip>
          <div className={ s.dot } />
        </a>
      )
    }
  }   
}

