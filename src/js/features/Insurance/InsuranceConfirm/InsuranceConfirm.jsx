import React, { Component } from 'react'

import Button from 'components/Button'
import InfoCard from 'components/Cards/InfoCard'
import CheckboxRow from 'components/Input/CheckboxRow'
import QuestionTable from 'components/QuestionTable'

import cn from 'classnames'
import s from './InsuranceConfirm.scss'

import dataInsuranceQuestions from 'data/insuranceQuestions'

export default class InsuranceChooseConfirm extends Component {
  onSubmit = (event) => {
    event.preventDefault()
    const { insurance, submitInsurance } = this.props
    submitInsurance()
  }
  render() {
    const { insurance, showTerms } = this.props
    const rows = dataInsuranceQuestions.map(question => ({
      name: question.title,
      answer: insurance.form.questions[question.id],
    }))

    return (
      <form onSubmit={ this.onSubmit }>
        <InfoCard>
          <QuestionTable rows={ rows } />
        </InfoCard>
        <CheckboxRow
          required
          model="insurance.form.terms"
          style={ { margin: '30px 0' } }
        >
          Do you agree to our terms? There will probably be some sort of link to the <a onClick={ showTerms }>Terms</a> here for you to agree with.
        </CheckboxRow>
        <div className="layout-column layout-align-center-center">
          <Button
            color="tertiary"
            type="submit"
          >
            Confirm
          </Button>
          <Button
            to="/insurance/choose/questions"
            style={ { marginTop: '30px' } }
            plain
          >
            Back
          </Button>
        </div>
      </form>
    )
  }
}
