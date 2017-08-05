import React, { Component } from 'react'
import textarea from 'react-textarea-autosize'
import { enterHandler } from 'components/Input/Input.utils'
import { uniqueId } from 'lodash'
import InputMessage from '../InputMessage'

import cn from 'classnames'
import s from './Textarea.scss'

const Textarea = textarea.default

export default class TextareaComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputId: uniqueId('textarea'),
    }
  }
  getTextareaRef = (ref) => {
    if (ref) {
      const { autoFocus, onEnterKey } = this.props
      if (autoFocus) {
        ref.focus()
      }
      if (onEnterKey) {
        enterHandler(ref._rootDOMNode, onEnterKey)
      }
    }
  }
  onChange = (event) => {
    const { storeChange, model, preventNewLine } = this.props
    const newValue = preventNewLine
      ? event.target.value.replace(/(?:\r\n|\r|\n)/g, '') // Replace new line with ''
      : event.target.value
    storeChange(model, newValue)
  }
  render(){
    const { input, model, display, meta: { touched, error, warning }, className, onEnterKey, storeChange, label, preventNewLine, ...otherProps } = this.props
    const { inputId } = this.state
    
    const labelClasses = cn(s.label, {[s.inactive]: !input.value || input.value.length === 0})

    const outerClasses = cn(
      { [s.invalid]: touched && (error || warning) },
      s.outer,
    )
    
    if (label) {
      return (
        <div className={ outerClasses }>
          <label
            htmlFor={ inputId }
            className={ labelClasses }
          >
            { label }
          </label>
          <Textarea
            id={ inputId }
            ref={ this.getTextareaRef }
            onChange={ this.onChange }
            className={ cn({[s.standard]: display === 'standard'}, className) }
            { ...input }
            { ...otherProps }
          />
          <InputMessage error={ error } warning={ warning } touched={ touched } />
        </div>

      )
    } else {
      return (
        <Textarea
          ref={ this.getTextareaRef }
          onChange={ this.onChange }
          className={ cn({[s.standard]: display === 'standard'}, className) }
          { ...input }
          { ...otherProps }
        />
      )
    }
  }
}
