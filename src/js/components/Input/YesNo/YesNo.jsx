import React, { Component } from 'react'

import cn from 'classnames'
import s from './YesNo.scss'

import iconClose from 'static/images/icons/close.svg'
import iconTick from 'static/images/icons/tick.svg'

export default class YesNo extends Component {
  onYes = () => {
    const { onClick } = this.props
    onClick('yes')
  }  
  onNo = () => {
    const { onClick } = this.props
    onClick('no')
  }
  render() {
    const { className } = this.props
    return (
      <div className={ cn('layout-row layout-align-center-center', className) }>
        <a className={ cn(s.optionYes, s.option) } onClick={ this.onYes }>
          <img src={ iconTick } />
        </a>
        <a className={ cn(s.optionNo, s.option) } onClick={ this.onNo }>
          <img src={ iconClose } />
        </a>
      </div>
    )
  }
}
