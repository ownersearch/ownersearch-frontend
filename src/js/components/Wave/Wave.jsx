import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Wave from './WaveLib'

export default class WaveReact extends Component {
  getRef = (ref) => {
    if (ref) {
      const canvasEl = findDOMNode(ref)
      const wave = new Wave({
        height: this.props.height,
        color: this.props.color,
        canvasEl,
      })
      wave.Initialize()
    }
  }
  render() {
    const { className } = this.props
    return (
      <canvas className={ className } style={ { width: '100%', height: '100%' } } ref={ this.getRef } />
    )
  }
}
