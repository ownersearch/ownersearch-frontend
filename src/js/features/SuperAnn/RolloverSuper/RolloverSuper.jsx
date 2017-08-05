import React, { Component } from 'react'
import { get } from 'lodash'

import SelectRowCard from 'components/SelectRowCard'
import { Row, Col } from 'components/Layout'

import cn from 'classnames'
import s from './RolloverSuper.scss'

export default class RolloverSuper extends Component {
  render() {
    const { superAnn } = this.props
    return (
      <Row className="layout-row layout-wrap" style={ { marginBottom: '30px' } }>
        { superAnn.accounts.map((item, idx) => (
          <Col className="flex-xs-100 flex-gt-xs-50" key={ item.usi }>
            <SelectRowCard
              className={ s.item }
              selectModel={ `superAnn.form.selected.${item.usi}` }
              selectValue={ get(superAnn, ['form', 'selected', item.usi]) }
              rangeModel={ `superAnn.form.range.${item.usi}` }
              rangeValue={ get(superAnn, ['form', 'range', item.usi]) }
              idx={ idx }
              title={ item.organisationalName }
              sub={ `USI: ${item.usi}` }
              number={ get(item, 'memberAccountBalance[0].amount') }
            />
          </Col>
        )) }
      </Row>
    )
  }
}
