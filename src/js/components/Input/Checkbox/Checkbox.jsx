import React, { Component } from 'react'

import s from './Checkbox.scss'
import cn from 'classnames'

export default class Checkbox extends Component {
  onChange = () => {
    const { model, storeChange, input: { value } } = this.props
    storeChange(model, !value)
  }
  render() {
    const { className, input, storeChange, meta: { touched, error, warning, active }, ...otherProps } = this.props
    const id = Math.random().toString(36).substring(7);
    const isInvalid = touched && (error || warning)
    const classes = cn(
      s.checkbox,
      { [s.active]: input.value },
      { [s.invalid]: isInvalid },
      className)
    
    return (
      <div>
        <div className={ classes }>
          <label htmlFor={ id }></label>
          <input
            id={ id }
            onChange={ this.onChange }
            type="checkbox"
            { ...input }
            { ...otherProps }
          />
        </div>
      </div>
    )
  }
}
