import React, { Component } from 'react'
import { get } from 'lodash'
import cn from 'classnames'
import s from './LocationSearchResult.scss'
import sText from 'components/Text/Text.scss'
import PeopleResults from 'features/People/PeopleResults'

export default class LocaitonSearchResult extends Component {
  render() {
    const { result } = this.props
    const owners = get(result, 'owners', [])
    return (
      <div className={ s.resultOuter }>
        <div className={ cn('layout-row layout-align-space-between', s.result) }>
          <div>{ result.address }</div>
          <div>{ owners.map((owner, idx) => <span>{ idx > 0 ? ', ' : '' } { owner }</span>) }</div>
        </div>
        { owners.map(owner => (
          <PeopleResults
            className={ s.people }
            name={ owner }
            suburb={ result.suburb }
            postcode={ result.postcode }
            state={ result.state }
          />
        )) }
      </div>
    )
  }
}
