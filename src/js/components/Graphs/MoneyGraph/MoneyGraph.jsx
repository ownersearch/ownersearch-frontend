import React, { Component } from 'react'

import dateFormat from 'dateformat'
import { range } from 'lodash'
import { time } from 'components/Date/Date.utils'

import AnimationFade from 'components/Animation/AnimationFade'
import MoneyGraphDragger from './MoneyGraphDragger'
import DateSelector from 'components/Date/DateSelector'
import Amount from 'components/Text/Amount'
import Tag from 'components/Tag'

import cn from 'classnames'
import s from './MoneyGraph.scss'
import sText from 'components/Text/Text.scss'

// config
// this will use the range: -intervals/2 -> intervals/2
const intervals = 10 
// This objects maps a display mode to graph angle
const graphAngleMap = {
  D: 3,
  W: 5,
  M: 7,
  '6M': 9,
  Y: 11,
  '10Y': 13,
}

const currentTime = new Date().getTime()

const getSelectedTime = (modePeriod, percent) => {
  const closestInterval = percent / 100 * intervals - intervals / 2
  return currentTime + closestInterval * modePeriod
}

const getSelectedValue = (currentValue, selectedTime, currentTime) => {
  const timeDiff = selectedTime - currentTime
  const numYears = timeDiff / time.year
  return currentValue * Math.pow(1.10, numYears)
}

export default class MoneyGraph extends Component {
  state = {
    percent: 50,
    containerEl: undefined,
    mode: 'M',
    modePeriod: time.month,
    modeFormat: 'mmmm',
    mountAnimationComplete: false,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        mountAnimationComplete: true,
      })
    }, 500)
  }
  sliderChange = (percent) => {
    this.setState({ percent })
  }
  getContainerRef = (ref) => {
    if (ref) {
      this.setState({
        containerEl: ref,
      })
    }
  }
  selectDateMode = (item) => {
    this.setState({
      mode: item.label,
      modePeriod: item.period,
      modeFormat: item.format,
    })
  }
  render() {
    const { percent, mode, modePeriod, modeFormat, containerEl, mountAnimationComplete } = this.state
    const selectedTime = getSelectedTime(modePeriod, percent)
    const currentValue = 6931.32
    const selectedValue = getSelectedValue(currentValue, selectedTime, currentTime)
    const graphAngle = mountAnimationComplete ? graphAngleMap[mode] : 0
    
    return (
      <div className={ s.graphContainer } ref={ this.getContainerRef }>
        { containerEl && 
          <MoneyGraphDragger
            container={ containerEl }
            changeFn={ this.sliderChange }
            position={ percent }
            slope={ graphAngle }
            tooltip={ dateFormat(selectedTime, modeFormat) }
          />
        }
        <div className={ cn(s.overlay, sText.noselect, 'layout-column layout-align-center-center') }>
          <DateSelector mode={ mode } select={ this.selectDateMode } />
          <br />
          <br />
          <br />
          <Amount
            number={ selectedValue }
            numberClassName={ s.amount }
            animate
            modifier="$"
          />
          <AnimationFade in={ percent > 50 }>
            <Tag>Forecast</Tag>
          </AnimationFade>
        </div>
        <div className={ s.marker } style={ { left: `${percent}%`} } />
        <div className={ s.graph }>
          <div className={ s.graphBg1 }>
            <div className={ s.graphBgInner1 } />
          </div>          
          <div className={ s.graphBg2 } style={ { width: `${percent}%`} }>
            <div className={ s.graphBgInner2 } />
          </div>
        </div>

        <div className={ s.graphSlope } style={ { transform: `rotate(-${graphAngle}deg)` } } />
      </div>
    )
  }
}

//        <div className={ s.lines }>
//          { range(0, intervals).map(idx => <div style={ { left: `${(idx + 0.5) * 10}%` } } key={ idx } />) }
//        </div>
