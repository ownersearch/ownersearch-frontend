import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { Input } from 'components/Input/Input'
import Select from 'components/Input/Select'
import Button from 'components/Button'
import Autosuggest from 'features/Autosuggest'
import VerifyButton from 'features/Auth/VerifyButton'
import { vRequired, vEmail } from 'components/Input/Input.validations'

import cn from 'classnames'
import sText from 'components/Text/Text.scss'

const getComponent = (components, field, short) => {
  const type = short ? 'short_name' : 'long_name'
  const item = components.find(item => item.types.includes(field))
  return item && item[type] ? item[type] : ''
}

class LocationSearchForm extends Component {
  onLocationSelected = (event, { suggestion: { components } }) => {
    const { change, name, submit } = this.props  
    const country = getComponent(components, 'country')
    const suburb = getComponent(components, 'locality')
    const postcode = getComponent(components, 'postal_code')
    const state = getComponent(components, 'administrative_area_level_1', true)
    const subpremise = getComponent(components, 'subpremise')
    const streetNum = getComponent(components, 'street_number')
    const route = getComponent(components, 'route')
    const street = [subpremise ? subpremise+'/' : '', streetNum+' ', route].join('')
    const fullAddress = `${street} ${suburb} ${state} ${postcode}`
    change('address', fullAddress)
    setTimeout(submit, 1)
  }
  render() {
    const { user, sendEmailVerifyEmail, handleSubmit } = this.props

    return (
      <form
        noValidate
        onSubmit={ handleSubmit }
      >
        <Field
          name="address"
          component={ Autosuggest }
          onSuggestionSelected={ this.onLocationSelected }
          label="Street"
          validate={ [vRequired] }
        />
      </form>
    )
    
  }
}

export default reduxForm({ form: 'locationSearchForm' })(LocationSearchForm)