import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import s from './Odometer.global.css'
import Odometer from 'odometer'

export default class OdometerReact extends Component {
  od = null
  getRef = (ref) => {
    if (ref) {
      const el = findDOMNode(ref)
      this.od = new Odometer({
        el: el,
        value: 0,
        theme: 'default',
        format: '(,ddd).dd',
      })
      this.forceUpdate()
    }
  }
  render() {
    if (this.od) {
      this.od.update(this.props.number)
    }
    return (
      <div ref={ this.getRef }></div>
    )
  }
}
