import React, { Component } from 'react'

import YesNoCard from 'components/YesNoCard'
import YesNoCardStack from 'components/YesNoCardStack'
import { Dots, Dot } from 'components/Dots'

import s from './InvestmentsQuestions.scss'

import dataInvestmentQuestions from 'data/investmentQuestions'

export default class InvestmentsChooseQuestions extends Component {
  componentDidMount() {
    const { resetQuestions } = this.props
    resetQuestions()
  }
  render() {
    const { investments, push } = this.props
    // We find the first question with yes === undefined
    // This is the the card which is the active card
    const activeIndex = dataInvestmentQuestions.findIndex(item => investments.form.questions[item.id] === undefined)
    const isLast = activeIndex === dataInvestmentQuestions.length - 1

    const onClick = () => {
      if (isLast) {
        push('/investments/choose/confirm')
      }
    }

    return (
      <div>
        <Dots className={ s.dots }>
          { dataInvestmentQuestions.map((item, idx) => <Dot key={ idx } active={ idx === activeIndex} />) }
        </Dots>
        <div className="layout-row layout-align-center">
          <YesNoCardStack>
            { dataInvestmentQuestions.slice().reverse().map((card, idx) =>
              <YesNoCard
                key={ card.id }
                yes={ investments.form.questions[card.id] }
                yesModel={ `investments.form.questions.${card.id}` }
                number={ card.number }
                body={ card.body }
                onClick={ onClick }
              />
            ) }
          </YesNoCardStack>
        </div>
      </div>
    )
  }
}
