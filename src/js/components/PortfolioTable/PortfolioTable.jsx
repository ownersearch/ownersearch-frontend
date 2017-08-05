import React from 'react'

import cn from 'classnames'
import s from './PortfolioTable.scss'

import IconGreen from 'components/Icons/Green'
import IconHealth from 'components/Icons/Health'
import IconTech from 'components/Icons/Tech'
import IconBasic from 'components/Icons/Basic'

const items = [{
  name: 'Green',
  percent: '6.67%',
  icon: <IconGreen />,
},{
  name: 'Health',
  percent: '6.67%',
  icon: <IconHealth />,
},{
  name: 'Tech',
  percent: '6.67%',
  icon: <IconTech />,
},{
  name: 'Basic',
  percent: '80%',
  icon: <IconBasic />,
}]

export default (props) => {
  const { className } = props
  return (
    <div className={ cn(s.table, className) }>
      { items.map((item) => (
        <div key={ item.name } className={ cn('layout-row layout-align-start-center', s.row) }>
          <div className={ s.icon }>{ item.icon }</div>
          <div className={ s.name }>{ item.name }</div>
          <div className="flex" />
          <div className={ s.percent }>{ item.percent }</div>
        </div>
      ))}
    </div>
  )
}
