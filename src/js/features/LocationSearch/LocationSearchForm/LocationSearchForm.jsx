import React, { Component } from 'react'
import { Form, Field, reduxForm } from 'redux-form'

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
  onSubmit = (formData) => {
    const { search } = this.props
    return search(formData)
  }
  onLocationSelected = (event, { suggestion: { components, coords } }) => {
    const { change, name, submit, setQuery } = this.props
    const country = getComponent(components, 'country')
    const suburb = getComponent(components, 'locality')
    const postcode = getComponent(components, 'postal_code')
    const state = getComponent(components, 'administrative_area_level_1', true)
    const subPremise = getComponent(components, 'subpremise')
    const streetNum = getComponent(components, 'street_number')
    const route = getComponent(components, 'route')
    const street = [subPremise ? subPremise+'/' : '', streetNum+' ', route].join('')
    const fullAddress = `${street} ${suburb} ${state} ${postcode}`
    change('address', fullAddress)
    change('subPremise', subPremise)
    change('streetNum', streetNum)
    change('route', route)
    change('suburb', suburb)
    change('state', state)
    change('postcode', postcode)
    change('country', country)

    setQuery({
      components: { subPremise, streetNum, route, suburb, state, postcode, country },
      string: fullAddress,
      coords,
    })
    setTimeout(submit, 1)
  }
  render() {
    const { user, sendEmailVerifyEmail, handleSubmit, className } = this.props

    return (
      <Form
        noValidate
        onSubmit={ handleSubmit(this.onSubmit) }
        className={ className }
      >
        <Field
          name="address"
          component={ Autosuggest }
          onSuggestionSelected={ this.onLocationSelected }
          label="Street"
          validate={ [vRequired] }
        />
      </Form>
    )
    
  }
}

export default reduxForm({ form: 'locationSearchForm' })(LocationSearchForm)
