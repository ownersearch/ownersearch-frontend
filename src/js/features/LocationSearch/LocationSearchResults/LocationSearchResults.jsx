import React, { Component } from 'react'

import cn from 'classnames'
import sText from 'components/Text/Text.scss'
import LoadingDots from 'components/Loading/LoadingDots'

export default class LocaitonSearchResults extends Component {
  render() {
    const { results, loading } = this.props
    return (
      <div>
        { loading 
          ? <LoadingDots style={ { margin: '100px 0' } } /> 
          :  <div>
            { results.map(result => (
              <div key={ result.id } className="layout-row layout-align-space-between">
                <div>{ result.name.givenName } { result.name.surname }</div>
                <div>
                  { result.physicalAddress.streetNumber }&nbsp;
                  { result.physicalAddress.streetName }&nbsp;
                  { result.physicalAddress.streetType }&nbsp;
                  { result.physicalAddress.suburb }&nbsp;
                  { result.physicalAddress.state }&nbsp;
                  { result.physicalAddress.postcode }&nbsp;
                </div>
                <div>
                  { result.contacts.map(contact => (
                    <span>{ contact.displayValue }</span>
                  ))}
                </div>
              </div>
            ))}
          </div> }
      </div>
    )
  }
}
