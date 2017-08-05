import React from 'react'
import cn from 'classnames'

export default (rootClass) => (props) => {
  const { className, children, ...otherProps } = props
  return (
    <div className={ cn(rootClass, className) } { ...otherProps }>
      { props.children }
    </div>
  )
}
