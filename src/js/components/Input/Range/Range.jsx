import React, { Component } from 'react'

import s from './Range.scss'
import cn from 'classnames'
import colors from 'styles/colors-export.css'
import Tooltip from 'components/Tooltip'
import sAnim from 'components/Animation/Animation.scss'

export default class Range extends Component {
  onChange = (event) => {
    const { model, storeChange } = this.props
    storeChange(model, event.target.value)
  }
  componentWillMount() {
    const { value, model, storeChange } = this.props
    if (!value) {
      // Default to 100
      storeChange(model, 100)
    }
  }
  render() {
    const { value, tooltip, className } = this.props
    const val = value || 50
    const style = {
      background: `linear-gradient(to right, ${colors.zGreen} 0%, ${colors.zGreen} ${val}%, white ${val}%, white 100%)`,
    }
    const thumbStyle= {
      left: `${val}%`,
    }

    return (
      <div className={ s.outer }>
        <input
          value={ val }
          onChange={ this.onChange }
          className={ s.input }
          style={ style }
          type="range"
        />
        <div className={ s.inner }>
          <div className={ cn(s.thumb, sAnim.pulse) } style={ thumbStyle }>
            <Tooltip show={ tooltip }>
              { tooltip }
            </Tooltip>
          </div>
        </div>
      </div>
    )
  }
}
