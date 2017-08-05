import React, { Component, PropTypes } from 'react'

import cn from 'classnames'
import sText from 'components/Text/Text.scss'
import s from './ChatBubble.scss'

import IconZena from 'components/Icons/Zena'

export default class ChatBubble extends Component {
  static propTypes = {
    isUser: PropTypes.bool,
  }
  render() {
    const { isUser, body } = this.props
    return (
      <div className={ cn('layout-row', isUser ? 'layout-align-end-start' : 'layout-align-start-start') }>
        { !isUser && <IconZena className={ s.avatar } /> }
        <div className={ cn(s.bubble, isUser ? s.userBubble : s.botBubble) }>
          { !isUser && <div className={ s.name }>Zena</div> }
          { body }
        </div>
      </div>
    )
  }
}

