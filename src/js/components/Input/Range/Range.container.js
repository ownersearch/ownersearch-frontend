import { connect } from 'react-redux'
import { get } from 'lodash'
import Range from './Range'

import { storeChange } from 'features/Store/Store.actions'

const stateToProps = (store, { model }) => ({
  value: get(store, model)
})

const dispatchToProps = {
  storeChange,
}

export default connect(stateToProps, dispatchToProps)(Range)
