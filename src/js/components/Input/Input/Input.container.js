import { connect } from 'react-redux'
import { storeChange } from 'features/Store/Store.actions'
import { get } from 'lodash'
import Input from './Input'

const stateToProps = (state, { model }) => ({
  input: {
    value: get(state, model),
  },
  meta: {},
})

const dispatchToProps = {
  storeChange,
}

export default connect(stateToProps, dispatchToProps)(Input)
