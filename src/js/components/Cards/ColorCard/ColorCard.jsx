import React from 'react'

import { pick, values } from 'lodash'

import cn from 'classnames'
import colors from 'styles/colors-export.css'
import s from './ColorCard.scss'

const getColor = (idx) => {
  const possibleNames = [ 'zGreen', 'zRed', 'zPurple', 'zOrange', 'zYellow', 'zLightBlue' ]
  const possible = values(pick(colors, possibleNames))
  return possible[idx % possible.length]
}

export default (props) => {
  const { className, children, bottom, idx, ...otherProps } = props
  return (
    <div className={ cn(s.card, 'layout-column', className) } { ...otherProps }>
      <div className={ cn(s.bar, { [s.bottom] : bottom }) } style={ { backgroundColor: getColor(idx) } }/>
      { children }
    </div>
  )
}
