import React, { Component, PropTypes } from 'react'

import { TextareaConnected } from 'components/Input/Textarea'

import cn from 'classnames'
import sText from 'components/Text/Text.scss'
import s from './ChatInput.scss'

export default class Chatinput extends Component {
  static propTypes = {
    
  }
  onSubmit = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault()
    }
    const { sendMessage, chat } = this.props
    sendMessage({
      body: chat.newMessage.body,
    })
  }
  render() {
    return (
      <form onSubmit={ this.onSubmit } className={ cn('layout-row', s.form) }>
        <TextareaConnected
          className={ cn('flex', s.input) }
          placeholder="Start typing"
          model="chat.newMessage.body"
          onEnterKey={ this.onSubmit }
          preventNewLine
        />
      </form>
    )
  }
}

