import React, { Component } from 'react'

import cn from 'classnames'
import s from './SimpleTable.scss'

export default class SimpleTable extends Component {
  render() {
    const { className, children } = this.props
    return (
      <div className={ cn(s.table, className) }>
        { children }
      </div>
    )
  }
}
