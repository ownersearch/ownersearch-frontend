import { connect } from 'react-redux'
import TodoList from './TodoList'
import { omit } from 'lodash'

const mapStateToProps = (state) => ({
  state: omit(state, ['scroll']),
})

export default connect(mapStateToProps)(TodoList)
