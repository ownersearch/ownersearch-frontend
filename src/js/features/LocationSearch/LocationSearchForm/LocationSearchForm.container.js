import { connect } from 'react-redux'
import LocationSearchForm from './LocationSearchForm'
import { search } from 'features/LocationSearch/LocationSearch.actions'

const stateToProps = () => ({
})

const dispatchToProps = {
  onSubmit: search,
}

export default connect(stateToProps, dispatchToProps)(LocationSearchForm)
