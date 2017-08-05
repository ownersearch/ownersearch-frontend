import React, { Component } from 'react'

import cn from 'classnames'
import s from './OnboardingDots.scss'
import { Dots, Dot } from 'components/Dots'

export default class OnboardingDots extends Component {
  render() {
    return (
      <Dots className={ s.dots }>
        <Dot to="/join/account" />
        <Dot to="/join/details" />
        <Dot to="/join/super" />
        <Dot to="/join/select" />
      </Dots>
    )
  }
}
