import React from 'react'

import cn from 'classnames'
import s from './QuestionTable.scss'
import colors from 'styles/colors-export.css'

import IconTick from 'components/Icons/Tick'
import IconClose from 'components/Icons/Close'

//const questions = [{
//  name: 'Invest in guns?',
//  answer: true,
//  meta: 'XX',
//},{
//  name: 'Invest in tobacco?',
//  answer: true,
//},{
//  name: 'Invest in nukes?',
//  answer: false,
//},{
//  name: 'Invest in gambling?',
//  answer: true,
//}]

export default (props) => {
  const { rows, className } = props
  return (
    <div className={ cn(s.table, className) }>
      { rows.map((item) => (
        <div key={ item.name } className={ cn('layout-row layout-align-start-center', s.row) }>
          <div className={ s.name }>{ item.name }</div>
          <div className="flex" />
          { item.meta && (
            <div className={ s.meta }>
              { item.meta }
            </div>
          )}
          <div className={ s.answer }>
            { item.answer
              ? <IconTick size={ 20 } style={ { color: colors.zGreen } } /> 
              : <IconClose size={ 20 } style={ { color: colors.zRed } } /> 
            }
          </div>
        </div>
      ))}
    </div>
  )
}
