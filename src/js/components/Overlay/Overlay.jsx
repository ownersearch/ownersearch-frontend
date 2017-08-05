import React, { Component } from 'react'

import cn from 'classnames'
import s from './Overlay.scss'

export default class Overlay extends Component {
  render() {
    const { children, color } = this.props
    return (
      <div className={ cn(s.overlay, {
        [s.primary]: color === 'primary',
      },'layout-column layout-align-center-center') }>
        { children }
      </div>
    )
  }
}
