import React, { Component } from 'react'

import { Row, Col } from 'components/Layout'
import Button from 'components/Button'
import PortfolioSelectCard from 'components/PortfolioSelectCard'

import cn from 'classnames'
import s from './InvestmentsChoose.scss'
import sText from 'components/Text/Text.scss'

export default class InvestmentsChoose extends Component {
  render() {
    const { hideText } = this.props
    return (
      <div>
        { !hideText && <div className={ cn(sText.descrip1, s.descrip) }>
          You’re currently investing in Zuper Basic. Combine other funds by adding them to your Portfolio.
        </div> }
        <Row className="layout-xs-column layout-gt-xs-row">
          <Col className="flex">
            <PortfolioSelectCard type="health" className={ s.card } />
          </Col>
          <Col className="flex">
            <PortfolioSelectCard type="green" className={ s.card } />
          </Col>
          <Col className="flex">
            <PortfolioSelectCard type="tech" className={ s.card } />
          </Col>
        </Row>
      </div>
    )
  }
}
