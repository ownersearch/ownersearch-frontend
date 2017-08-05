import React, { Component } from 'react'

import InputMessage from '../InputMessage'
import { uniqueId } from 'lodash'
import imgChevron from 'static/images/icons/chevronDown.svg'

import cn from 'classnames'
import s from '../Input/Input.scss'
import s2 from './Select.scss'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputId: uniqueId('input'),
    }
  }
  render() {
    const { input, label, color, hideDot,className, meta: { touched, error, warning, active }, children, ...otherProps } = this.props
    const { inputId } = this.state

    const outerClasses = cn(s.outer, 'flex',
      { [s.invalid]: touched && (error || warning) },
    )

    const inputClasses = cn(s.standard,
      { [s.white]: color === 'white' },
      s2.select,
      className,
    )

    const labelClasses = cn(
      s.label,
      { [s.inactive]: !input.value || input.value.length === 0 },
      { [s.white]: color === 'white' },
    )

    return (
      <div className={ outerClasses }>
        <label
          htmlFor={ inputId }
          className={ labelClasses }
        >
          { label }
        </label>
        <select
          id={ inputId }
          { ...input }
          { ...otherProps }
          className={ inputClasses }
          style={ { backgroundImage: `url(${imgChevron})` } }
        >
          <option disabled selected value style={ { display: 'none' } }></option>
          { children }
        </select>
        <InputMessage error={ error } warning={ warning } touched={ touched } />
      </div>
    )
  }
}
