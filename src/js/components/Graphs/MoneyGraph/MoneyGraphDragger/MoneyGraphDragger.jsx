import React, { Component } from 'react'
import clickDrag from 'react-clickdrag'

import Tooltip from 'components/Tooltip'

import cn from 'classnames'
import s from './MoneyGraphDragger.scss'
import sAnim from 'components/Animation/Animation.scss'

class MoneyGraphDragger extends Component {
  state = {
    active: false,
    lastEventId: ''
  }
  componentWillReceiveProps(nextProps) {
    const { dataDrag, container, position } = nextProps
    const { lastEventId } = this.state
    if (dataDrag.isMoving && dataDrag.id && dataDrag.id != lastEventId) {
      const containerWidth = container.offsetWidth
      const prevPositionPx = position / 100 * containerWidth
      let newPositionPx  = prevPositionPx + dataDrag.deltaX
      if (newPositionPx <= 0) {
        newPositionPx = 0
      } else if (newPositionPx >= containerWidth) {
        newPositionPx = containerWidth
      }
      const positionPerc = newPositionPx / containerWidth * 100
      this.setState({ active: true })
      this.setState({ lastEventId: dataDrag.id })
      this.props.changeFn(positionPerc)
    } else {
      this.setState({ active: dataDrag.isMoving })
    }
  }
  render() {
    const { active } = this.state
    const { position, container, slope, tooltip } = this.props
    // We adjust the height up/down based on the slope angle
    const slopeRad = slope / 180 * Math.PI
    const containerWidth = container.offsetWidth
    const distanceFromCenter = position / 100 * containerWidth - containerWidth / 2
    const height = - distanceFromCenter * Math.tan(slopeRad)
    const style = {
      left: `${position}%`,
      marginTop: `${height}px`,
    }
    return (
      <div className={ cn(s.dragger, sAnim.pulse, {[s.active] : active}) } style={ style }>
        <Tooltip show={ position !== 50 }>
          { tooltip }
        </Tooltip>
      </div>
    )
  }
}

export default clickDrag(MoneyGraphDragger, { touch: true })
