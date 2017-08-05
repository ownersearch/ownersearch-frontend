import { connect } from 'react-redux'
import ChatInput from './ChatInput'
import { sendMessage } from 'features/Chat/Chat.actions'

const stateToProps = ({ chat }) => ({
  chat,
})

const dispatchToProps = {
  sendMessage,
}

export default connect(stateToProps, dispatchToProps)(ChatInput)
