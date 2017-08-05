import { connect } from 'react-redux'
import ChatLog from './ChatLog'
import { getChat, sendMessage } from 'features/Chat/Chat.actions'

const stateToProps = ({ chat }) => ({
  chat,
})

const dispatchToProps = {
  getChat,
  sendMessage,
}

export default connect(stateToProps, dispatchToProps)(ChatLog)
