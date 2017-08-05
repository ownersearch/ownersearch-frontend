import React, { Component } from 'react'

import Button from 'components/Button'
import CheckboxRow from 'components/Input/CheckboxRow'
import PortfolioTable from 'components/PortfolioTable'
import QuestionTable from 'components/QuestionTable'
import InfoCard from 'components/Cards/InfoCard'

import cn from 'classnames'
import s from './InvestmentsConfirm.scss'

import dataInvestmentQuestions from 'data/investmentQuestions'

export default class InvestmentsChooseConfirm extends Component {
  onSubmit = (event) => {
    event.preventDefault()
    const { investments, submitInvestments } = this.props
    submitInvestments()
  }
  render() {
    const { investments, showTerms } = this.props
    const rows = dataInvestmentQuestions.map(question => ({
      name: question.title,
      answer: investments.form.questions[question.id],
    }))
    return (
      <form onSubmit={ this.onSubmit }>
        <InfoCard>
          <div className={ s.title }>Portfolios</div>
          <PortfolioTable />
          <div className={ s.title }>Options</div>
          <QuestionTable rows={ rows } />
        </InfoCard>
        <CheckboxRow
          required
          model="investments.form.terms"
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
            to="/investments/choose/questions"
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

