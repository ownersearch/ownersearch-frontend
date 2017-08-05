import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import YesNoCard from 'components/YesNoCard'
import YesNoCardStack from 'components/YesNoCardStack'
import Button from 'components/Button'

import s from './InsuranceQuestions.scss'

import dataInsuranceQuestions from 'data/insuranceQuestions'

class InsuranceQuestions extends Component {
  render() {
    const { handleSubmit, formData, push, next } = this.props
    // We find the first question with yes === undefined
    // This is the the card which is the active card
    const activeIndex = dataInsuranceQuestions.findIndex(item => formData[item.id] === undefined)
    const isLast = activeIndex === dataInsuranceQuestions.length - 1
    const onClick = () => {
      if (isLast) {
        push(next)
      }
    }
    return (
      <form
        noValidate
        onSubmit={ handleSubmit }
        style={ { marginBottom: '30px' } }
      >
        <div className="layout-row layout-align-center">
          <YesNoCardStack>
            { dataInsuranceQuestions.slice().reverse().map(card => (
              <Field
                key={ card.id }
                component={ YesNoCard }
                name={ card.id }
                title={ `${card.number} / ${dataInsuranceQuestions.length}` }
                body={ card.body }
                onClick={ onClick }
              />
            )) }
          </YesNoCardStack>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'insuranceQuestions',
})(InsuranceQuestions)
