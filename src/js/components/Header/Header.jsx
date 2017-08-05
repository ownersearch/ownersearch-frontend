import React, { Component } from 'react'
import { Link } from 'react-router'

import { Container } from 'components/Layout'
import Button from 'components/Button'
import ChatPopup from 'features/Chat/ChatPopup'
import IconChat from 'components/Icons/Chat'
import AnimationFade from 'components/Animation/AnimationFade'

import IconMenu from 'components/Icons/Menu'
import imgLogo from 'static/images/logo-white.svg'
import imgMenu from 'static/images/icons/menu.svg'

import s from './Header.scss'
import cn from 'classnames'
import { browserHistory } from 'react-router'

export default class Header extends Component {
  menuButton = () => {
    const { toggleMenu, location } = this.props
    if (location.pathname === '/chat') {
      browserHistory.goBack()  
    } else {
      toggleMenu()
    }
  }
  render() {
    const { toggleMenu, toggleChat, chatIsOpen, layout, location } = this.props
    return (
      <div>
        <div className={ s.header }>
          <div className={ cn('layout-row layout-align-space-between', s.inner) }>
            <a className={ s.button } onClick={ this.menuButton }>
              <IconMenu size={ 30 } active={ layout.menuOpen } back={ location.pathname === '/chat' } />
            </a>
            { layout.headerTitle ?
              <div className={ cn(s.title, 'hide-gt-xs') }>{ layout.headerTitle }</div> :
              <Link to="/" className={ cn(s.logo, 'hide-gt-xs layout-column layout-align-center-center') }>
                <img alt="logo" src={ imgLogo } />
              </Link> }
            <Link to="/" className={ cn(s.logo, 'layout-column layout-align-center-center hide-xs') }>
              <img alt="logo" src={ imgLogo } />
            </Link>
            <a className={ cn(s.button, s.chat, {[s.active]: chatIsOpen}, 'hide-xs') } onClick={ () => toggleChat() } >
              <IconChat active={ chatIsOpen } close={ chatIsOpen } unread={ 3 } />
            </a>
            <Link className={ cn(s.button, s.chat, 'hide-gt-xs') } to="/chat" activeClassName={ s.active } >
              <IconChat active={ location.pathname === '/chat' } unread={ 3 } />
            </Link>
          </div>
        </div>
        <AnimationFade in={ chatIsOpen }>
          <ChatPopup />
        </AnimationFade>
      </div>
    )
  }
}
