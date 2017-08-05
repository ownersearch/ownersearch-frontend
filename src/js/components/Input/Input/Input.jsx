import React, { Component } from 'react'
import { uniqueId } from 'lodash'
import InputMessage from '../InputMessage'
import InputValid from '../InputValid'

import cn from 'classnames'
import s from './Input.scss'

export default class Input extends Component {
  static defaultProps = {
    display: 'standard',
  }
  constructor(props) {
    super(props)
    this.state = {
      inputId: uniqueId('input'),
    }
  }
  onChange = (event) => {
    const { model, storeChange } = this.props
    storeChange(model, event.target.value)
  }
  render() {
    const { input, labelUp, label, children, color, hideDot, className, meta: { touched, error, warning, active }, ...otherProps } = this.props
    const { inputId } = this.state
    
    const outerClasses = cn(s.outer,
      { [s.invalid]: touched && (error || warning) },
    )    
    
    const inputClasses = cn(s.standard,
      { [s.white]: color === 'white' },
      className,
    )

    const labelClasses = cn(
      s.label,
      { [s.inactive]: (!input.value || input.value.length === 0) && !labelUp },
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
        <input
          id={ inputId }
          onChange={ this.onChange }
          { ...input }
          { ...otherProps }
          className={ inputClasses }
        />
        <InputMessage
          error={ error }
          warning={ warning }
          touched={ touched }
        />
        { !hideDot && <InputValid valid={ !(error || warning) && !active && input.value } /> }
        { children }
      </div>
    )
  }
}

