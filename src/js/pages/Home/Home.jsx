import React, { Component } from 'react'

import LocationSearchForm from 'features/LocationSearch/LocationSearchForm'
import LocationSearchResults from 'features/LocationSearch/LocationSearchResults'
import Map from 'features/Map'

import cn from 'classnames'
import s from './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className="layout-row flex">
        <Map className={ cn('flex-60', s.map) } />
        <div className={ cn('flex-40', s.results) }>
          <LocationSearchForm />
          <LocationSearchResults />
        </div>
      </div>
    )
  }
}
