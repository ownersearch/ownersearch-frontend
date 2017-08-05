import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import ChatBubble from './ChatBubble'
import ChatChoices from './ChatChoices'
import LoadingDots from 'components/Loading/LoadingDots'

import cn from 'classnames'
import sText from 'components/Text/Text.scss'
import s from './ChatLog.scss'

import imgTriangle from 'static/images/patterns/triangleBold.svg'

export default class ChatLog extends Component {
  static propTypes = {
  }
  scrollRef = undefined
  getScrollRef = (ref) => {
    if (ref) {
      this.scrollRef = findDOMNode(ref)
      this.scrollDown()
    }
  }
  scrollDown = () => {
    if (this.scrollRef) {
      setTimeout(() => {
        this.scrollRef.scrollTop = this.scrollRef.scrollHeight
      }) 
    }
  }
  render() {
    const { chat } = this.props
    this.scrollDown()
    const lastMessage = chat.log[chat.log.length-1] || {}
    return (
      <div className={ cn(s.logOuter, 'flex') } style={ { backgroundImage: `url(${imgTriangle})` } } ref={ this.getScrollRef }>
        <div className={ cn(s.log, 'layout-column flex') }>
          { chat.log.map((item, idx) => <ChatBubble key={ idx } isUser={ item.user } body={ item.body }  />) }
          <div className="layout-row layout-align-end">
            { chat.newMessage.pending && <LoadingDots sm /> }
          </div>
          <ChatChoices choices={ lastMessage.choices }/>
        </div>
      </div>
    )
  }
}
