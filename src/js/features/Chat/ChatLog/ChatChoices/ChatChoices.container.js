import { connect } from 'react-redux'
import ChatChoices from './ChatChoices'
import { sendMessage } from 'features/Chat/Chat.actions'

const stateToProps = () => ({})

const dispatchToProps = {
  sendMessage,
}

export default connect(stateToProps, dispatchToProps)(ChatChoices)
