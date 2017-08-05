import React from 'react'
import cn from 'classnames'

export default (props) => (
  <div className={ cn('layout-row layout-align-center-center', props.className) } style={ { height: '10px' } }>
    { props.children }
  </div>
)
