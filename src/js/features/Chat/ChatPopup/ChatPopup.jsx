import React, { Component, PropTypes } from 'react'

import ChatLog from 'features/Chat/ChatLog'
import ChatInput from 'features/Chat/ChatInput'

import cn from 'classnames'
import sText from 'components/Text/Text.scss'
import s from './ChatPopup.scss'

export default class ChatPopup extends Component {
  static propTypes = {
  }
  render() {
    const { ...otherProps } = this.props
    return (
      <div className={ cn(s.popup, 'layout-column hide-xs') } { ...otherProps }>
        <div className={ cn(s.header, 'layout-row layout-align-center-center') }>
          Zena
        </div>
        <ChatLog />
        <ChatInput />
      </div>
    )
  }
}
