import React, { Component } from 'react'
import ReactAutosuggest from 'react-autosuggest'
import theme from './Autosuggest.scss'
import InputMessage from 'components/Input/InputMessage'
import InputValid from 'components/Input/InputValid'

import { uniqueId } from 'lodash'

import s from 'components/Input/Input/Input.scss'
import cn from 'classnames'

import { getLocation } from './Autosuggest.utils'
const getSuggestionValue = suggestion => suggestion.name
const renderSuggestion = suggestion => <div>{suggestion.name}</div>

export default class Autosuggest extends Component {
  constructor() {
    super()
    this.state = {
      suggestions: [],
      inputId: uniqueId('input'),
    }
  }
  static defaultProps = {
    value: '',
  }
  onSuggestionsFetchRequested = ({ value }) => {
    getLocation(value).then((suggestions) => {
      this.setState({ suggestions })
    })
  }
  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] })
  }
  render() {
    const { inputId, suggestions } = this.state
    const { input, labelUp, label, hideDot, onSuggestionSelected, meta: { touched, error, warning, active } } = this.props
    
    const outerClasses = cn(s.outer,
      { [s.invalid]: touched && (error || warning) },
    )    
    
    const labelClasses = cn(
      s.label,
      { [s.inactive]: (!input.value || input.value.length === 0) && !labelUp },
    )
        
    const inputProps = {
      onChange: input.onChange,
      value: typeof input.value === 'string' ? input.value : '',
      id: inputId,
    }
      
    return (
      <div className={ outerClasses }>
        <label
          htmlFor={ inputId }
          className={ labelClasses }
        >
          { label }
        </label>
        <ReactAutosuggest
          theme={ theme }
          suggestions={ suggestions }
          onSuggestionsFetchRequested={ this.onSuggestionsFetchRequested }
          onSuggestionsClearRequested={ this.onSuggestionsClearRequested }
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={ renderSuggestion }
          inputProps={ inputProps }
          onSuggestionSelected={ onSuggestionSelected }
        />
        { !hideDot && <InputValid valid={ !(error || warning) && !active && input.value } /> }
        <InputMessage
          error={ error }
          warning={ warning }
          touched={ touched }
        />
      </div>
    )
  }
}