import React from 'react'
import { pick, values } from 'lodash'

import cn from 'classnames'
import s from './Tag.scss'
import colors from 'styles/colors-export.css'


const getColor = (idx) => {
  const possibleNames = [ 'zGreen', 'zRed', 'zPurple', 'zOrange', 'zYellow', 'zLightBlue' ]
  const possible = values(pick(colors, possibleNames))
  return possible[idx % possible.length]
}

export default (props) => {
  const style = Object.assign({}, props.idx ? { background: getColor(props.idx), border: 'none', color: 'white' } : {}, props.style)
  return (
    <div className={ cn(s.tag, props.className) } style={ style }>
      { props.children }
    </div>
  )
}
