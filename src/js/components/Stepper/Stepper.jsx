import React, { Component } from 'react'

import cn from 'classnames'
import s from './Stepper.scss'

export default class Stepper extends Component {
  render() {
    const { className, children, step } = this.props
    const currentStepStyle = { transform: `translateX(${(-step + 1) * 100 }%)` }
  
    return (
      <div className={ cn(s.containerOuter, className) }>
        <div className={ s.containerInner } style={ currentStepStyle }>
          { children }
        </div>
      </div>
    )
  }
}
