import React, { Component } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'
import s from './AnimationPageTransition.scss'

export default class AnimationPageTransition extends Component {
  render() {
    const { children, location } = this.props
    
    return (
      <TransitionGroup className="layout-column flex" style={ { position: 'relative' } }>
        <CSSTransition
          key={ location.pathname }
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
          { children }
        </CSSTransition>
      </TransitionGroup>    
    )
  }
}
