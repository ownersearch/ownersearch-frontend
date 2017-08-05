import React, { Component } from 'react';
import { Link } from 'react-router'

import cn from 'classnames'
import s from './Crumbs.scss'
import Chevron from 'components/Icons/Chevron'

export default class Crumb extends Component {
  render() {
    const { to, children, parent, active } = this.props
    return (
      <div className={ cn(s.crumb, 'layout-row layout-align-start-center') }>
        <Link
          className={ cn(s.crumb, {[s.active]: active}) }
          activeClassName={ s.active }
          to={ to }
        >
          { children }
        </Link>
        { parent && <div className={ s.circle } /> }
      </div>
    )
  }
}
