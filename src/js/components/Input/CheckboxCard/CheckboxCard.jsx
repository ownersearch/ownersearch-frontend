import React, { Component } from 'react'

import cn from 'classnames'
import s from './CheckboxCard.scss'
import sText from 'components/Text/Text.scss'
import { Checkbox } from 'components/Input/Checkbox'
import Button from 'components/Button'
import ColorCard from 'components/Cards/ColorCard'

export default class CheckboxCard extends Component {
  render() {
    const { idx, children, style, label, onClick, ...otherProps } = this.props
    return (
      <ColorCard
        idx={ idx }
        className={ cn(s.card, 'layout-column layout-align-center-center') }
        style={ style }
      >
        <Checkbox className={ s.checkbox } { ...otherProps } />
        <div className={ cn(sText.descrip1, s.label) }>
          { label }
        </div>
      </ColorCard>
    )
  }
}
