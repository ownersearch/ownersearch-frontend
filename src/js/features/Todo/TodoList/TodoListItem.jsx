import React from 'react'

import cn from 'classnames'
import s from './TodoList.scss'

export default props => (
  <div className={ cn(s.listItem, {[s.active]: props.complete}, 'layout-row layout-align-start-center') }>
    <div className={ cn(s.marker) } />
    <div className={ s.text }>{ props.children }</div>
  </div>
)
