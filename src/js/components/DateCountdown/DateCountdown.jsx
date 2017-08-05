import React, { Component } from 'react'

import { time } from 'components/Date/Date.utils'

import cn from 'classnames'
import s from './DateCountdown.scss'
import sText from 'components/Text/Text.scss'


// Note - Silly American Format
const releaseDate = new Date('8/22/2017')

export default class DateCountdown extends Component {
  componentWillMount() {
    this.getDateDiff()
    this.dateDiffInterval = setInterval(this.getDateDiff, 1000)
  }  
  componentWillUnmount() {
    clearInterval(this.dateDiffInterval)
  }
  dateDiffInterval = null
  getDateDiff = () => {
    const currentDate = new Date()
    const timeDiff = Math.abs(releaseDate.getTime() - currentDate.getTime())

    // Yes, this is gross... Bit rushed for time..
    const diffMonths  = Math.floor(timeDiff / time.month)
    const diffDays    = Math.floor((timeDiff - (diffMonths * time.month)) / time.day)
    const diffHours   = Math.floor((timeDiff - (diffMonths * time.month + diffDays * time.day)) / time.hour)
    const diffMins    = Math.floor((timeDiff - (diffMonths * time.month + diffDays * time.day + diffHours * time.hour)) / time.min)
    const diffSeconds = Math.floor((timeDiff - (diffMonths * time.month + diffDays * time.day + diffHours * time.hour + diffMins * time.min)) / time.sec)
    
    this.setState({
      diffMonths,
      diffDays,
      diffHours,
      diffMins,
      diffSeconds,
    })
    
  }
  render() {
    const {       
      diffMonths,
      diffDays,
      diffHours,
      diffMins,
      diffSeconds, } = this.state
    
    return (
      <div className={ cn('layout-row layout-align-start-center', s.row) }>
        <div className={ cn(sText.descrip3, 'flex-40') }>Don’t miss out, waitlist closes in:</div>
        <div className={ cn(s.time, 'flex') }>
          <div className={ sText.heading4 }>{ diffMonths }</div>
          <div className={ sText.accent }>Months</div>
        </div>        
        <div className={ cn(s.time, 'flex') }>
          <div className={ sText.heading4 }>{ diffDays }</div>
          <div className={ sText.accent }>Days</div>
        </div>        
        <div className={ cn(s.time, 'flex') }>
          <div className={ sText.heading4 }>{ diffHours }</div>
          <div className={ sText.accent }>Hours</div>
        </div>       
        <div className={ cn(s.time, 'flex') }>
          <div className={ sText.heading4 }>{ diffMins }</div>
          <div className={ sText.accent }>Mins</div>
        </div>        
        <div className={ cn(s.time, 'flex') }>
          <div className={ sText.heading4 }>{ diffSeconds }</div>
          <div className={ sText.accent }>Seconds</div>
        </div>
      </div>
    )
  }
}
