import { connect } from 'react-redux'
import TodoFooter from './TodoFooter'
import { omit } from 'lodash'

const mapStateToProps = (state) => ({
  state: omit(state, ['scroll']),
})

export default connect(mapStateToProps)(TodoFooter)
