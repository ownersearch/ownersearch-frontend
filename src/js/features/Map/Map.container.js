import { connect } from 'react-redux'
import Map from './Map'

const stateToProps = ({ locationSearch }) => ({
  coords: locationSearch.query.coords,
})

const dispatchToProps = {
}

export default connect(stateToProps, dispatchToProps)(Map)
