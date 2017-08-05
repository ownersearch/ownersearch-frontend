import React, { Component } from 'react'

import { time } from 'components/Date/Date.utils'
import { range } from 'lodash'
import dateFormat from 'dateformat'

import cn from 'classnames'
import s from './DateSelector.scss'

const items = [{
  period: time.day,
  label: 'D',
  format: 'dd mmm'
}, {
  period: time.week,
  label: 'W',
  format: 'dd mmm'
}, {
  period: time.month,
  label: 'M',
  format: 'mmmm'
}, {
  period: time.month * 6,
  label: '6M',
  format: 'mmmm yyyy'
}, {
  period: time.year,
  label: 'Y',
  format: 'mmmm yyyy'
}, {
  period: time.year * 10,
  label: '10Y',
  format: 'yyyy'
}]

export default class DateSelector extends Component {
  render() {
    const { select, mode } = this.props
    return (
      <div className={ s.range }>
        { items.map((item, idx) => {
          return (
            <span
              key={ idx }
              className={ cn({ [s.active]: mode === item.label }) }
              onClick={ () => select(item) }
            >
              { item.label }
            </span>
          )
        }) }
      </div>
    )
  }
}
