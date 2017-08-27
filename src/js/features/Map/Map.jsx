import React, { Component } from 'react'
import cx from 'classnames'
import s from './Map.scss'
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl'

const accessToken = 'pk.eyJ1IjoiZGF2aWRyZXZheSIsImEiOiJjajJ4NnRpenMwMWJyMzJtbnZrc3A5cThyIn0.82nxtP2HGA8XEaWI9Hne0A'

export default class GeoJSONExample extends Component {
  render() {
    const { className, children, coords } = this.props

    const center = coords.lat ? [coords.lng, coords.lat] : [151.221158, -33.830194]

    const geojson = {
      type: 'FeatureCollection',
      features: coords.lat ? [{
        type: 'Feature',
        properties: {
        },
        geometry: {
          type: 'Point',
          coordinates: [coords.lng, coords.lat],
        },
      }] : [],
    }

    return (
      <div className={ cx(s.map, className) }>
        <ReactMapboxGl
          containerStyle={ {
            height: '100%',
            width: '100%',
          } }
          scrollZoom
          zoom={ [13] }
          style="mapbox://styles/davidrevay/cj6u9nib472xw2rp5qu6jlc7w"
          accessToken={ accessToken }
          center={ center }
          movingMethod="jumpTo"
        >
          <GeoJSONLayer
            data={ geojson }
            circleLayout={ { visibility: 'visible' } }
            circlePaint={ {
              'circle-color': '#de1937',
              'circle-radius': 10,
            } }
            symbolLayout={ {
              'text-field': '{place}',
              'text-font': ['Open Sans Semibold'],
              'text-offset': [0, 0.6],
              'text-anchor': 'top',
            } }
          />

        </ReactMapboxGl>
      </div>
    )
  }
}
