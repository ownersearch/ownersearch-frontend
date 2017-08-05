import { connect } from 'react-redux'
import { get } from 'lodash'
import Checkbox from './Checkbox'
import { storeChange } from 'features/Store/Store.actions'

const stateToProps = (store, { model }) => ({
  input: {
    value: get(store, model),
  },
  meta: {},
})

const dispatchToProps = {
  storeChange,
}

export default connect(stateToProps, dispatchToProps)(Checkbox)
