import React from 'react'

import cn from 'classnames'
import s from './Dot.scss'

import { Link } from 'react-router'

export default (props) => {
  const { to, active } = props

  if (to) {
    return (
      <Link
        to={ to }
        className={ s.dot }
        activeClassName={ s.active }
      />
    )
  } else {
    return (
      <a
        className={ cn(s.dot, {[s.active]: active}) }
      />
    )
  }
}
