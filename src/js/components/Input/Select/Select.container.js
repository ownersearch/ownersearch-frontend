import { connect } from 'react-redux'
import { get } from 'lodash'
import Select from './Select'
import { storeChange } from 'features/Store/Store.actions'

const stateToProps = (store, { model }) => ({
  value: get(store, model),
})

const dispatchToProps = {
  storeChange,
}

export default connect(stateToProps, dispatchToProps)(Select)
