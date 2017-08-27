import { connect } from 'react-redux'
import LocationSearchForm from './LocationSearchForm'
import { search, setQuery } from 'features/LocationSearch/LocationSearch.actions'

const stateToProps = () => ({
})

const dispatchToProps = {
  search,
  setQuery,
}

export default connect(stateToProps, dispatchToProps)(LocationSearchForm)
