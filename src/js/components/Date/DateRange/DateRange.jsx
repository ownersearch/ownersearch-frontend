import React, { Component } from 'react'

import { time } from 'components/Date/Date.utils'
import { range } from 'lodash'
import dateFormat from 'dateformat'

import cn from 'classnames'
import s from './DateRange.scss'

const currentTime = (new Date()).getTime()
const monthRange = range(-6, 6).map(num => new Date(currentTime + num * time.month))
const yearRange = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 10, 20, 30, 40].map(num => new Date(currentTime + num * time.year))

export default class DateRange extends Component {
  render() {
    const currentYear = dateFormat(currentTime, 'yy')
    return (
      <div className={ s.range }>
        { yearRange.map((time, idx) => {
          const dateString = dateFormat(time, 'yy')
          return (
            <span
              key={ idx }
              className={ cn({ [s.active]: dateString === currentYear }) }
            >
              { dateString }
            </span>
          )
        }) }
      </div>
    )
  }
}

//        { monthRange.map((time, idx) => (
//          <span
//            key={ idx }
//            className={ cn({ [s.active]: idx === 6 }) }
//          >
//            { dateFormat(time, 'mmm') }
//          </span>
//        )) }    