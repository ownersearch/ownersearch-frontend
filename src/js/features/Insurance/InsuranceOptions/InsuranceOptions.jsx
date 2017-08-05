import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import CheckboxCard from 'components/Input/CheckboxCard'
import { Row, Col } from 'components/Layout'
import Button from 'components/Button'
import { vRequired } from 'components/Input/Input.validations'

import cn from 'classnames'
import sText from 'components/Text/Text.scss'
import s from './InsuranceOptions.scss'


const options = [{
  name: 'noInsurance',
  label: 'I don’t want any insurance',
  idx: 1,
}, {
  name: 'zuperInsurance',
  label: 'I want new insurance from Zuper',
  idx: 0,
}, 
//                 {
//  name: 'existingInsurance',
//  label: 'I want to keep my current insurance',
//}
]

class InsuranceOptions extends Component {
  onChange = (event, newValue, previousValue) => {
    const { change } = this.props
    const name = event.target.name
    event.preventDefault()
    options.forEach(option => {
      // Set all other checkboxes to false
      change(option.name, option.name != name ? false : true)
    })
  }
  render() {
    const { handleSubmit, formData } = this.props

    const getNextPage = () => {
      if (formData && formData.values) {
        if (formData.values.zuperInsurance) {
          return '/join/insurance/choose'
        } 
      }
      return '/join/confirm'
    }
    
    return (
      <form
        noValidate
        onSubmit={ handleSubmit }
      >
        <Row className={ cn('layout-row layout-align-center layout-wrap', s.row) }>
          { options.map((option) => (
            <Col className="flex-gt-xs-33">
              <Field
                idx={ option.idx }
                name={ option.name }
                component={ CheckboxCard }
                label={ option.label }
                onChange={ this.onChange }
                onBlur={e => e.preventDefault() }
              />
            </Col>
          )) }
        </Row>
        <div
          className="layout-row layout-align-center-center"
          style={ { marginTop: '30px' } }
        >
          <Button
            to={ getNextPage() }
            color="tertiary"
          >
            Next
          </Button>
        </div>
      </form>
    )
    
  }
}

export default reduxForm({
  form: 'insuranceOptions',
  initialValues: {
    zuperInsurance: true,
  },
})(InsuranceOptions)
