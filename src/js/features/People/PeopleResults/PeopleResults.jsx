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
        { people && people.data && people.data.map(person => (
          <div className={ cn('layout-row', s.result) }>
            <div className="flex-40">{ person.name && person.name.givenName } { person.name && person.name.surname }</div>
            <div className="flex-30">
              { person.physicalAddress && person.physicalAddress.suburb }
            </div>
            <div className="flex-30" style={ { textAlign: 'right' } }>
              { person.contacts && person.contacts.map(contact => (
                <span>{ contact.displayValue }</span>
              ))}
            </div>
          </div>
        )) }
      </div>
    )
  }
}
