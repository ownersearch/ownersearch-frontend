import React from 'react'
// TODO: https://codepen.io/werm/pen/BhtLm
import cn from 'classnames'
import s from './LoadingDots.scss'

export default (props) => (
  <div className={ cn('layout-row layout-align-center', props.className) } style={ props.style }>
    <div className={ cn(s.dot, s.dot1, props.sm && s.sm, props.shadow && s.shadow) } />
    <div className={ cn(s.dot, s.dot2, props.sm && s.sm, props.shadow && s.shadow) } />
    <div className={ cn(s.dot, s.dot3, props.sm && s.sm, props.shadow && s.shadow) } />
  </div>
)
