import React, { Component, PropTypes } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'

import s from './InputMessage.scss'

export default class InputMessage extends Component {
  static propTypes = {
  }
  render() {
    const { touched, error, warning } = this.props
    const show = touched && (error || warning)
    return (
      <TransitionGroup className={ s.container }>
        { show && 
          <CSSTransition
            key="message"
            timeout={ 200 }
            classNames={ {
              enter: s.fadeEnter,
              enterActive: s.fadeEnterActive,
              appear: s.fadeEnter,
              appearActive: s.fadeEnterActive,
              exit: s.fadeExit,
              exitActive: s.fadeExitActive,
            } }
          >
            <div className={ s.message }>{ error || warning }</div>
          </CSSTransition>
        }
      </TransitionGroup>      
    )
  }
}

