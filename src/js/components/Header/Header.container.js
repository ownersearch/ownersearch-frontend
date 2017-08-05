import { connect } from 'react-redux'
import Header from './Header'
import { toggleMenu } from 'features/Layout/Layout.actions'
import { toggleChat } from 'features/Chat/Chat.actions'

const stateToProps = ({ layout, chat }) => ({
  layout,
  chatIsOpen: chat.isOpen,
})

const dispatchToProps = {
  toggleMenu,
  toggleChat,
}

export default connect(stateToProps, dispatchToProps)(Header)