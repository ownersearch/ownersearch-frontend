import React from 'react'

import { pick, values } from 'lodash'
import Amount from 'components/Text/Amount'

import cn from 'classnames'
import s from './SuperRow.scss'
import colors from 'styles/colors-export.css'
import sText from 'components/Text/Text.scss'


const getColor = (idx) => {
  const possibleNames = [ 'zGreen', 'zRed', 'zPurple', 'zOrange', 'zYellow', 'zLightBlue' ]
  const possible = values(pick(colors, possibleNames))
  return possible[idx % possible.length]
}

export default (props) => {
  const { className, idx } = props
  return (
    <div className={ cn(s.row, 'layout-row layout-align-start-center', className) } style={ { borderColor: getColor(idx) } }>
      <div className="flex">
        <div className={ cn(sText.descrip1, s.title ) }>Industry Super</div>
        <div className={ sText.descrip4 }>Fund Nº: 645321465</div>
      </div>
      <Amount number="2,511" modifier="$" />           
    </div>
  )
}
