import React, { Component } from 'react'

import cn from 'classnames'
import s from './PeopleResults.scss'
import sText from 'components/Text/Text.scss'

export default class PeopleResults extends Component {
  componentWillMount() {
    const { getPeople, name, postcode } = this.props
    getPeople({ name, postcode })
  }
  render() {
    const { people, className } = this.props
    return (
      <div className={ className }>
        { people && people.data && people.data.map(person => {
          const address = person.physicalAddress && [
            person.physicalAddress.streetNumber,
            person.physicalAddress.streetName,
            person.physicalAddress.streetType,
            person.physicalAddress.suburb,
            person.physicalAddress.postcode,
          ].join(' ')
          return (
            <div className={ cn('layout-row', s.result) }>
              <div className="flex-20">{ person.name && person.name.givenName } { person.name && person.name.surname }</div>
              <div className="flex-60">
                { address }
              </div>
              <div className="flex-20" style={ { textAlign: 'right' } }>
                { person.contacts && person.contacts.map((contact, idx) => (
                  <span key={ idx }>{ contact.displayValue }</span>
                ))}
              </div>
            </div>
          )
        }) }
      </div>
    )
  }
}
