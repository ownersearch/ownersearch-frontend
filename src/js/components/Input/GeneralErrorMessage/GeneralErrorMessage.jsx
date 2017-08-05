import React, { Component, PropTypes } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'

import s from './GeneralErrorMessage.scss'

export default class GeneralErrorMessage extends Component {
  static propTypes = {
  }
  render() {
    const { error } = this.props
    return (
      <TransitionGroup className={ s.container }>
        { error && 
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
            <div className={ s.message }>{ error }</div>
          </CSSTransition>
        }
      </TransitionGroup>      
    )
  }
}

