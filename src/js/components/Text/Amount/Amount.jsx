import React from 'react'
import s from './Amount.scss'
import cn from 'classnames'

import Odometer from 'components/Odometer'

export default (props) => (
  <div className={ cn('layout-column layout-align-center-center', props.className) }>
    <div className={ cn('layout-row layout-align-center-start', s.amount) }>
      <div className={ s.modifier }>{ props.modifier }</div>
      <div className={ cn(s.number, props.numberClassName) }>
        { props.animate 
        ? <Odometer number={ props.number } />
        : props.number }
      </div>
    </div>
    { props.label && 
      <div className={ s.label }>{ props.label }</div>
    }
  </div>
)
