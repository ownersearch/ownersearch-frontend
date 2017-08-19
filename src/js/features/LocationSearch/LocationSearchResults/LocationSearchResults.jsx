import React, { Component } from 'react'

import cn from 'classnames'
import s from './LocationSearchResults.scss'
import sText from 'components/Text/Text.scss'
import LoadingDots from 'components/Loading/LoadingDots'
import LocationSearchResult from 'features/LocationSearch/LocationSearchResult'

export default class LocaitonSearchResults extends Component {
  render() {
    const { results, loading } = this.props
    return (
      <div>
        { loading 
          ? <LoadingDots style={ { margin: '100px 0' } } /> 
          : <div>
              { results.map(result => (
                <LocationSearchResult key={ result.address } result={ result }/>
              )) }
              { results.length === 0 && <div>No results found</div> }
            </div> 
        }
      </div>
    )
  }
}
