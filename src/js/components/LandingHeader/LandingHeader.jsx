import React, { Component } from 'react'
import s from './LandingHeader.scss'
import cn from 'classnames'
import window from 'window'

import { Container } from 'components/Layout'
import MobileMenu from 'components/MobileMenu'
import Button from 'components/Button'

import imgLogo from 'static/images/logo-white.svg'
import imgMenu from 'static/images/icons/menu.svg'

import { Link } from 'react-router'
import jump from 'components/Scroll/Jump'

const links = [{
  name: 'Manifesto',
  to: '/manifesto',
}, {
  name: 'Investment',
  to: '/investment',
}, {
  name: 'Super 101',
  to: '/super-101',
}, {
  name: 'Blog',
  to: '/blog',
}]

const linksMobile = [{
  name: 'Manifesto',
  to: '/manifesto'
}, {
  name: 'Super 101',
  to: '/super-101'
}, {
  name: 'Investment',
  to: '/investment'
}, {
  name: 'Contact',
  to: '/contact'
}, {
  name: 'Jobs',
  to: '/jobs'
}, {
  name: 'Blog',
  to: '/blog'
}]

export default class LandingHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { atTop } = this.props
    const { isOpen } = this.state
    return (
      <div className={ cn(s.header, {[s.filled]: !atTop || isOpen}) }>
        <MobileMenu
          items={ linksMobile }
          isOpen={ isOpen }
          onClick={ this.toggleOpen }
        />
        <Container className={ s.inner }>
          <Link to="/" className={ s.logo }>
            <img src={ imgLogo } />
          </Link>
          <div className="flex" />
          <div className={ cn(s.navDesktop, 'hide-xs hide-sm') }>
            { links.map(link => <Link key={ link.name } to={ link.to } activeClassName={ s.linkActive }>{ link.name }</Link>) }
          </div>
          <Button
            ghost
            color="white"
            href="#sign-up-form"
            onClick={ () => jump('#sign-up-form') }
            size="sm"
            style={ { marginRight: '10px', textTransform: 'capitalize', } }
          >
            <span className="hide-xs">Get Early Access</span>
            <span className="hide-gt-xs">Get Access</span>
          </Button>
          <a className={ cn(s.button, 'hide-gt-sm') } onClick={ this.toggleOpen }>
            <img src={ imgMenu } />
          </a>
        </Container>
      </div>
    )
  }
}
