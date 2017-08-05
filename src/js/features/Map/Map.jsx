import React, { Component } from 'react'
import cx from 'classnames'
import s from './Map.scss'
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl'

const office = [ 151.221158, -33.830194 ]

const accessToken = 'pk.eyJ1IjoiZGF2aWRyZXZheSIsImEiOiJjajJ4NnRpenMwMWJyMzJtbnZrc3A5cThyIn0.82nxtP2HGA8XEaWI9Hne0A'

const geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
    },
    geometry: {
      type: 'Point',
      coordinates: [
        151.221158,
        -33.830194,
      ],
    },
  }],
}

export default class GeoJSONExample extends Component {
  render() {
    const { className, children } = this.props
    return (
      <div className={ cx(s.map, className) }>
        <ReactMapboxGl
          containerStyle={ {
            height: '100%',
            width: '100%',
          } }
          scrollZoom={ false }
          zoom={ [13] }
          style="mapbox://styles/mapbox/light-v8"
          accessToken={ accessToken }
          center={ office }
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
