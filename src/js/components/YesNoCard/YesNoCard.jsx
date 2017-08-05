import React, { Component } from 'react'

import cn from 'classnames'
import s from './YesNoCard.scss'
import sText from 'components/Text/Text.scss'
import YesNo from 'components/Input/YesNo'

export default class YesNoCard extends Component {
  onClick = (data) => {
    const { onClick, input } = this.props
    input.onChange(data)
    if (onClick) {
      onClick()
    }
  }
  render() {
    const { className, yesModel, title, body, input } = this.props
    const classes = cn(
      s.card,
      { [s.yes]: input.value === 'yes' },
      { [s.no]: input.value === 'no' },
    )
    return (
      <div className={ classes }>
        <div className={ s.number }>{ title }</div>
        <div className={ sText.descrip1 }>
          { body }
        </div>
        <div className="flex" />
        <YesNo
          className={ s.options }
          onClick={ this.onClick }
        />
      </div>
    )
  }
}
