import React, { Component } from 'react'

import IconClose from 'components/Icons/Close'
import cn from 'classnames'
import s from './Toasts.scss'

const hideTimeoutDuration = 5000

export default class Toast extends Component {
  hideTimeout = null
  mouseEnter = () => {
    clearTimeout(this.hideTimeout);
  }
  mouseLeave = () => {
    this.startHideTimeout()
  }
  startHideTimeout = () => {
    this.hideTimeout = setTimeout(this.closeToast, hideTimeoutDuration)
  }
  closeToast = () => {
    const { hide, toast } = this.props
    hide({ id: toast.id })
  }
  componentDidMount() {
    this.startHideTimeout()
  }
  render() {
    const { toast } = this.props;

    return (
      <div
        className={ cn(s.toast, 'layout-row', { [s.error] : toast.type=='error' }) }
        onMouseEnter={ this.mouseEnter }
        onMouseLeave={ this.mouseLeave }
      >
        <div className={ cn(s.toastInner, 'flex layout-row layout-align-start-center') }>
          { toast.title }
          <div className="flex" />
          <a className={ s.close } onClick={ this.closeToast }><IconClose size={ 20 } /></a>
        </div>
      </div>
    )
  }
}
