import { connect } from 'react-redux'
import PeopleResults from './PeopleResults'
import { getPeople } from '../People.actions'

const stateToProps = ({ people }, { name, postcode = '' }) => ({
  people: people[`${name}-${postcode}`],
})

const dispatchToProps = {
  getPeople,
}

export default connect(stateToProps, dispatchToProps)(PeopleResults)
