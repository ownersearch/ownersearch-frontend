import React from 'react'
import cn from 'classnames'
import s from './InfoCard.scss'

import { Link } from 'react-router'

export default (props) => {
  const { className, title, titleRight, to, toText, children, ...otherProps } = props
  return (
    <div className={ cn(s.card, className) } { ...otherProps }>
      { title && <div className={ cn(s.title, 'layout-row') }>
        { title }
        <div className="flex" />
        <div style={ {  opacity: '0.5' } } >{ titleRight }</div>
      </div> }
      <div>
        { children }
      </div>
      { to && toText && <div className={ s.overlay } /> }
      { to && toText && <Link to={ to } className={ cn(s.button, 'layout-column layout-align-center-center') }>{ toText }</Link> }
    </div>
  )
}
