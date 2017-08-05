import React, { Component } from 'react'
import Toast from './Toast'
import s from './Toasts.scss'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'

export default class Toasts extends Component {
  render() {
    const { toasts, hide } = this.props

    const transition = {
      enter: s.enter,
      enterActive: s.enterActive,
      exit: s.exit,
      exitActive: s.exitActive,
      appear: s.appear,
      appearActive: s.appearActive,
    }

    return (
      <TransitionGroup className={ s.toastContainer }>
        { toasts.stack.map(toast => (
          <CSSTransition
            key={ toast.id } 
            timeout={ 300 }
            classNames={ transition }
          >
            <Toast toast={ toast } hide={ hide } />
          </CSSTransition>
        )) }
      </TransitionGroup>
    )
  }
}
