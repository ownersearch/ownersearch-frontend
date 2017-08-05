import React, { Component, PropTypes } from 'react'
import AnimationFade from 'components/Animation/AnimationFade'

import s from './InputValid.scss'

export default class InputValid extends Component {
  static propTypes = {
  }
  render() {
    const { valid } = this.props
    return (
      <AnimationFade in={ valid }>
        <div className={ s.dot } />
      </AnimationFade>   
    )
  }
}

