import React from 'react'
import s from './Container.scss'
import cn from 'classnames'

export default (props) => {
  const { className, children, paddingTop, paddingBottom, ...otherProps } = props
  const classes = cn(s.root, {
    [s.paddingTop]: paddingTop,
    [s.paddingBottom]: paddingBottom,
  }, className)
  return (
    <div className={ classes } { ...otherProps }>
      { props.children }
    </div>
  )
}
