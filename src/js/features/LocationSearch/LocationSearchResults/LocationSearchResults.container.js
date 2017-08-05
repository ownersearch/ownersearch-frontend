import { connect } from 'react-redux'
import LocationSearchResults from './LocationSearchResults'

const stateToProps = ({ locationSearch }) => ({
  results: locationSearch.results,
  loading: locationSearch.loading,
})

const dispatchToProps = {
}

export default connect(stateToProps, dispatchToProps)(LocationSearchResults)
