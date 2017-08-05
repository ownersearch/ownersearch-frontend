
import React from 'react'
import cn from 'classnames'
import s from './Menu.scss'

export default (props) => {
  const { className, active, back, ...otherProps } = props
  return (
    <div className={ cn(s.icon, {[s.active]: active, [s.back]: back}, className) } {...otherProps} >
      <div className={ s.l1 } />
      <div className={ s.l2 } />
      <div className={ s.l3 } />
    </div>
  )
}
