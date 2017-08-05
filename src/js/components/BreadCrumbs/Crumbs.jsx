import React, { Component } from 'react';
import { Link } from 'react-router'

import cn from 'classnames'
import s from './Crumbs.scss'

export default class Crumb extends Component {
  render() {
    const { children, title } = this.props
    return (
      <div className={ cn('layout-row layout-align-gt-xs-start-center', s.crumbs) }>
        { title && <span className={ s.title }>{ title }</span> }
        { children }
      </div>
    )
  }
}
