import React, { Component } from 'react'

import LocationSearchForm from 'features/LocationSearch/LocationSearchForm'
import LocationSearchResults from 'features/LocationSearch/LocationSearchResults'
import SettingsAvatar from 'features/Auth/SettingsAvatar'
import Map from 'features/Map'

import cn from 'classnames'
import s from './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className="layout-row flex">
        <div className={ cn('flex-40 layout-column', s.results) }>
          <LocationSearchForm className={ s.header } />
          <div className={ cn('flex', s.content) }>
            <LocationSearchResults />
          </div>
        </div>
        <Map className={ cn('flex-60', s.map) } />
        <SettingsAvatar />
      </div>
    )
  }
}
