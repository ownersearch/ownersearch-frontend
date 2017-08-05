import React, { Component } from 'react'

import cn from 'classnames'
import s from './YesNoCardStack.scss'

export default class YesNoCardStack extends Component {
  render() {
    const { className, children } = this.props
    return (
      <div className={ cn(s.stack, 'layout-column', className) }>
        { children }
      </div>
    )
  }
}
