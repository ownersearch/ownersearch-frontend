import React, { Component } from 'react'

import s from './CheckboxRow.scss'
import cn from 'classnames'
import { Checkbox } from 'components/Input/Checkbox'

export default class CheckboxRow extends Component {
  render() {
    const { children, style, ...otherProps } = this.props
    return (
      <div className={ cn(s.row, 'layout-row layout-align-start-center') } style={ style }>
        <Checkbox { ...otherProps } />
        <div className="flex">
          { children }
        </div>
      </div>
    )
  }
}
