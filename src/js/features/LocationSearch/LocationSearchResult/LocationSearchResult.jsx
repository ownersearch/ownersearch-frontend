import React, { Component } from 'react'

import cn from 'classnames'
import s from './LocationSearchResult.scss'
import sText from 'components/Text/Text.scss'
import PeopleResults from 'features/People/PeopleResults'

export default class LocaitonSearchResult extends Component {
  render() {
    const { result } = this.props
    return (
      <div className={ s.resultOuter }>
        <div className={ cn('layout-row layout-align-space-between', s.result) }>
          <div>{ result.address }</div>
          <div>{ result.ownerName }</div>
        </div>
        <PeopleResults className={ s.people } name={ result.ownerName } />
      </div>
    )
  }
}
